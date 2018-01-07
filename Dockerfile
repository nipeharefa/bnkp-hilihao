FROM ruby:2.3.3

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
    apt-get update -yqq \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -yqq nodejs jpegoptim \
    && npm install -g npm \
    && npm install -g gulp \ 
    # Installl Yarn
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update -yqq \
    && apt-get install -yqq yarn libelf1

WORKDIR /usr/src/app
COPY Gemfile* ./
RUN bundle install
# COPY . .

CMD bundle exec puma