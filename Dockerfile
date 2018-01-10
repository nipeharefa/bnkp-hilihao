FROM ruby:2.3.3

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -yqq \
  && apt-get install -yqq --no-install-recommends \
    postgresql-client \
    nodejs \
    qt5-default \
    libqt5webkit5-dev \
  && apt-get -q clean \
  && rm -rf /var/lib/apt/lists

# Install NodeJS and NPM
RUN \
    curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update -yqq \ 
    && apt-get install -y libelf1 nodejs yarn vim unzip git-core

RUN \
    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7  \
    && apt-get install -yqq apt-transport-https ca-certificates \
    && sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list' \ 
    && apt-get update -yqq \ 
    && gem install passenger --no-rdoc --no-ri \
    && passenger-install-nginx-module --auto --prefix=/etc/nginx

# Datababas
RUN \
    apt-get install -yqq libpq-dev libmysqlclient-dev

WORKDIR /usr/src/app
COPY Gemfile* ./
RUN bundle install
# COPY . .
RUN mkdir -p /etc/nginx/conf/conf.d

COPY entrypoint.sh /
RUN ["chmod", "+x", "/entrypoint.sh"]

ENTRYPOINT ["/entrypoint.sh"]
