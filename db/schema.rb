# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180111053646) do

  create_table "baptisms", force: :cascade do |t|
    t.string "baptism_number"
    t.date "baptism_at"
    t.string "pastor"
    t.string "church_name"
    t.integer "congregation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["congregation_id"], name: "index_baptisms_on_congregation_id"
  end

  create_table "congregations", force: :cascade do |t|
    t.string "name"
    t.string "uuid"
    t.string "place_of_birth"
    t.datetime "date_of_birth"
    t.integer "last_education"
    t.integer "last_lingkungan"
    t.integer "last_marriage"
    t.string "gender"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "diakens", force: :cascade do |t|
    t.integer "congregation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["congregation_id"], name: "index_diakens_on_congregation_id"
  end

  create_table "educations", force: :cascade do |t|
    t.string "school_name"
    t.date "date_of_graduate"
    t.string "degree"
    t.integer "congregation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["congregation_id"], name: "index_educations_on_congregation_id"
  end

end
