# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_06_151322) do

  create_table "account", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "name", limit: 512, null: false
    t.string "id_unique", limit: 32
    t.integer "rut"
    t.string "dv", limit: 512
    t.bigint "phone"
    t.string "email", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "address_1", limit: 512
    t.string "address_2", limit: 512
    t.string "lyric", limit: 1
    t.string "sms_status_hook_url", limit: 512
    t.string "sms_incoming_hook_url", limit: 512
    t.string "email_event_hook_url", limit: 512
    t.integer "priority", default: 1
    t.string "portability_lookup", limit: 1, default: "F"
    t.integer "postpaid", default: 0
    t.integer "id_county"
    t.integer "id_country"
    t.index ["id_county"], name: "id_county__idx"
    t.index ["id_unique"], name: "id_unique", unique: true
  end

  create_table "account_email", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.string "email", limit: 512, null: false
    t.string "verification_key", limit: 512, null: false
    t.string "verified", limit: 1
    t.string "is_default", limit: 1
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
  end

  create_table "account_settings", id: { type: :integer, unsigned: true }, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.string "email_header_from_connectus", limit: 1, default: "T"
    t.string "email_unsubscribe", limit: 1, default: "T"
    t.string "email_link_tracking", limit: 1
  end

  create_table "active_storage_attachments", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "addr_country", id: :integer, charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "name", limit: 512
    t.integer "code", null: false
    t.string "flag_emoji", limit: 100
    t.string "flag_picture", limit: 512
    t.string "currency", limit: 3
    t.string "short", limit: 2
    t.integer "number_length"
    t.datetime "updated_at"
    t.integer "currency_fraction_size"
    t.float "exchange_to_clp"
    t.float "exchange_to_usd"
    t.float "vat", limit: 53
  end

  create_table "addr_region", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "name", limit: 512
    t.integer "country_id", null: false
    t.index ["country_id"], name: "country_id__idx"
  end

  create_table "addr_region_county", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "name", limit: 512
    t.integer "region_id", null: false
    t.index ["region_id"], name: "region_id__idx"
  end

  create_table "asdf", id: { type: :integer, unsigned: true }, charset: "latin1", force: :cascade do |t|
  end

  create_table "auth_cas", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_on"
    t.string "service", limit: 512
    t.string "ticket", limit: 512
    t.string "renew", limit: 1
    t.index ["user_id"], name: "user_id__idx"
  end

  create_table "auth_event", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.datetime "time_stamp"
    t.string "client_ip", limit: 512
    t.integer "user_id"
    t.string "origin", limit: 512
    t.text "description", size: :long
    t.index ["user_id"], name: "user_id__idx"
  end

  create_table "auth_group", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "role", limit: 512
    t.text "description", size: :long
  end

  create_table "auth_membership", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "user_id"
    t.integer "group_id"
    t.index ["group_id"], name: "group_id__idx"
    t.index ["user_id"], name: "user_id__idx"
  end

  create_table "auth_permission", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "group_id"
    t.string "name", limit: 512
    t.string "table_name", limit: 512
    t.integer "record_id"
    t.index ["group_id"], name: "group_id__idx"
  end

  create_table "auth_user", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "first_name", limit: 128
    t.string "last_name", limit: 128
    t.string "email", limit: 512
    t.string "password", limit: 512
    t.string "registration_key", limit: 512
    t.string "reset_password_key", limit: 512
    t.string "registration_id", limit: 512
    t.string "banned", limit: 1
    t.string "deleted", limit: 1
    t.integer "id_account"
    t.bigint "phone"
    t.datetime "last_login"
    t.string "auth_user_type", limit: 512
    t.string "avatar", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "password_digest"
    t.datetime "reset_password_key_expires_at"
    t.boolean "is_migrated", default: true
    t.index ["id_account"], name: "id_account__idx"
  end

  create_table "auth_user_api_key", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "id_unique_account", limit: 32
    t.string "api_key", limit: 512
    t.integer "id_auth_user"
    t.string "suspended", limit: 1
    t.datetime "expires"
    t.datetime "updated_at"
    t.datetime "created_at"
    t.index ["id_auth_user"], name: "id_auth_user__idx"
  end

  create_table "auth_user_invitation", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "email", limit: 512
    t.string "user_type", limit: 512
    t.integer "id_account"
    t.string "invitation_key", limit: 512, null: false
    t.index ["id_account"], name: "id_account__idx"
  end

  create_table "bank_transfer", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_purchase", null: false
    t.integer "amount", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_purchase"], name: "id_purchase__idx"
  end

  create_table "basket", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_purchase", null: false
    t.integer "id_product", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float "price_average", limit: 53, null: false
    t.integer "price_with_tax", null: false
    t.integer "amount", null: false
    t.integer "price", null: false
    t.integer "id_country"
    t.index ["id_product"], name: "id_product__idx"
    t.index ["id_purchase"], name: "id_purchase__idx"
  end

  create_table "client", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.string "name", limit: 512
    t.string "avatar", limit: 512
    t.string "id_unique", limit: 8, null: false
    t.string "deleted", limit: 1
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_unique"], name: "id_unique", unique: true
  end

  create_table "client_msg_transaction", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.integer "id_client"
    t.integer "id_delivery"
    t.integer "increase"
    t.integer "decrease"
    t.integer "id_country"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_client"], name: "id_client__idx"
    t.index ["id_delivery"], name: "id_delivery__idx"
  end

  create_table "contact_list", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "id_unique", limit: 64
    t.integer "id_account"
    t.string "name", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "contact_list_type", limit: 512
    t.integer "number_of_contacts"
    t.integer "id_transaction"
    t.index ["id_account"], name: "id_account__idx"
  end

  create_table "contact_list_data", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_contact_list"
    t.text "contact_data", size: :long
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_contact_list"], name: "id_contact_list__idx"
  end

  create_table "delivery", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "id_unique", limit: 32, null: false
    t.integer "id_account"
    t.integer "id_auth_user"
    t.string "delivery_type", limit: 512
    t.string "name", limit: 512
    t.datetime "deliver_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "id_product"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_auth_user"], name: "id_auth_user__idx"
    t.index ["id_product"], name: "id_product__idx"
    t.index ["id_unique"], name: "id_unique", unique: true
  end

  create_table "dlr", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_sms_outgoing"
    t.string "id_jasmin", limit: 512
    t.string "status", limit: 512
    t.text "body", size: :long
    t.datetime "created_at"
    t.index ["id_jasmin"], name: "id_jasmin_idx", length: 15
    t.index ["id_sms_outgoing"], name: "id_sms_outgoing__idx"
  end

  create_table "elastic_number", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.integer "id_country"
    t.bigint "elastic_number", null: false
    t.string "is_default", limit: 1
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["elastic_number"], name: "elastic_number", unique: true
    t.index ["id_account"], name: "id_account__idx"
  end

  create_table "email", id: :integer, charset: "utf8mb4", collation: "utf8mb4_bin", force: :cascade do |t|
    t.string "id_unique", limit: 32, null: false
    t.string "id_mg", limit: 512
    t.string "status", limit: 512
    t.integer "id_account"
    t.integer "id_delivery"
    t.string "src_email", limit: 512, null: false
    t.string "dst_email", limit: 512, null: false
    t.string "subject", limit: 512
    t.text "email_content", size: :long
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "sender", limit: 512
    t.integer "priority"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_delivery"], name: "id_delivery__idx"
    t.index ["id_mg"], name: "id_mg_idx", length: 191
    t.index ["id_unique"], name: "id_unique", unique: true
    t.index ["status"], name: "status_idx", length: 191
  end

  create_table "email_event", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_email"
    t.integer "id_delivery"
    t.integer "id_account"
    t.string "id_event", limit: 512
    t.string "email_event", limit: 512
    t.text "event_content", size: :long
    t.datetime "event_timestamp"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_delivery"], name: "id_delivery__idx"
    t.index ["id_email"], name: "id_email__idx"
    t.index ["id_event"], name: "id_event_dix", length: 255
  end

  create_table "email_transaction", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "id_account", limit: 512
    t.integer "id_money_transaction"
    t.integer "id_delivery"
    t.integer "id_pricing_plan"
    t.string "email_transaction_type", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "increase"
    t.integer "decrease"
    t.float "price", limit: 53
    t.index ["id_delivery"], name: "id_delivery__idx"
    t.index ["id_money_transaction"], name: "id_money_transaction__idx"
    t.index ["id_pricing_plan"], name: "id_pricing_plan__idx"
  end

  create_table "emergency_numbers", id: { type: :integer, unsigned: true }, charset: "latin1", force: :cascade do |t|
    t.string "A", limit: 100
    t.string "B", limit: 100
    t.string "C", limit: 100
    t.string "D", limit: 100
    t.string "E", limit: 100
    t.string "F", limit: 100
    t.string "G", limit: 100
  end

  create_table "file_upload", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.integer "id_auth_user"
    t.string "hash_short_link", limit: 512, null: false
    t.string "name", limit: 512, null: false
    t.string "file_type", limit: 512, null: false
    t.string "uploaded_file", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_auth_user"], name: "id_auth_user__idx"
  end

  create_table "global_settings", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "emergency_reroute", limit: 1
  end

  create_table "image_upload", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.integer "id_auth_user"
    t.string "name", limit: 512
    t.string "image", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_auth_user"], name: "id_auth_user__idx"
  end

  create_table "khipu_payment", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_purchase", null: false
    t.string "id_khipu", limit: 512, null: false
    t.string "id_bill", limit: 512, null: false
    t.string "khipu_url", limit: 512, null: false
    t.string "manual_url", limit: 512, null: false
    t.string "mobile_url", limit: 512, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text "notification", size: :long
    t.index ["id_purchase"], name: "id_purchase__idx"
  end

  create_table "log_mnp_lookup", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "account_name", limit: 512
    t.text "numbers", size: :long
    t.datetime "created_at"
  end

  create_table "log_registration", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "account_name", limit: 512
    t.string "account_email", limit: 512
    t.datetime "created_at"
  end

  create_table "lyric_test_channels", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.bigint "cel_number", null: false
    t.string "provider", limit: 512, null: false
    t.string "status", limit: 1
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "channel"
  end

  create_table "money_transaction", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_auth_user"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "id_account", limit: 512, null: false
    t.string "id_purchase", limit: 512, null: false
    t.integer "credit"
    t.integer "debit"
    t.index ["id_auth_user"], name: "id_auth_user__idx"
  end

  create_table "msg_template", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.integer "id_auth_user"
    t.string "name", limit: 512
    t.text "template_text", size: :long
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "id_product"
    t.integer "id_elastic_number"
    t.string "is_automatic_answer", limit: 1
    t.string "is_default", limit: 1
    t.text "answer_to", size: :long
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_auth_user"], name: "id_auth_user__idx"
    t.index ["id_elastic_number"], name: "id_elastic_number__idx"
    t.index ["id_product"], name: "id_product__idx"
  end

  create_table "msg_transaction", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.integer "id_money_transaction"
    t.integer "id_delivery"
    t.integer "id_pricing_plan"
    t.string "msg_transaction_type", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "increase"
    t.integer "decrease"
    t.integer "id_country"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_delivery"], name: "id_delivery__idx"
    t.index ["id_money_transaction"], name: "id_money_transaction__idx"
    t.index ["id_pricing_plan"], name: "id_pricing_plan__idx"
  end

  create_table "payment_method", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
  end

  create_table "paypal_payment", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_purchase", null: false
    t.string "orderID", limit: 512, null: false
    t.string "payment_method", limit: 512, null: false
    t.string "id_bill", limit: 512
    t.string "paypal_state", limit: 512, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_purchase"], name: "id_purchase__idx"
  end

  create_table "portability", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.date "portability_date", null: false
    t.bigint "portability_number", null: false
    t.integer "landline"
    t.integer "receptor"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["portability_number"], name: "portability_number_idx"
  end

  create_table "pricing_plan", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "name", limit: 512
    t.float "rate"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "enabled", limit: 1
  end

  create_table "pricing_range", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.float "price", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "id_product"
    t.integer "range_min", null: false
    t.integer "id_country"
    t.index ["id_product"], name: "id_product__idx"
  end

  create_table "product", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "name", limit: 512, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "provider", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "provider_name", limit: 512, null: false
    t.integer "provider_code"
    t.integer "id_country"
    t.integer "MCC"
    t.integer "MNC"
  end

  create_table "provider_range", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "provider_name", limit: 512, null: false
    t.integer "provider_code"
    t.integer "range_number", null: false
    t.integer "range_digits", null: false
    t.index ["range_number"], name: "range_number_idx"
  end

  create_table "purchase", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "id_unique", limit: 32, null: false
    t.integer "id_account", null: false
    t.integer "id_auth_user", null: false
    t.string "payment_method", limit: 512
    t.string "status", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "receipt_name", limit: 512
    t.string "receipt", limit: 512
    t.integer "id_country"
    t.float "exchange_to_clp"
    t.float "exchange_to_usd"
    t.integer "vat"
    t.float "price", limit: 53
    t.float "price_with_tax", limit: 53
    t.index ["created_at"], name: "created_at_idx"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_auth_user"], name: "id_auth_user__idx"
    t.index ["id_unique"], name: "id_unique", unique: true
  end

  create_table "report", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account", null: false
    t.integer "id_auth_user"
    t.integer "id_delivery"
    t.datetime "generated_at", default: "2018-01-25 01:31:01", null: false
    t.datetime "expiry_at", null: false
    t.string "report_type", limit: 512
    t.string "name", limit: 512, null: false
    t.string "file_type", limit: 512, null: false
    t.string "file_name", limit: 512, null: false
    t.binary "file_blob", size: :long
    t.string "file_key", limit: 512, null: false
    t.index ["file_key"], name: "file_key_idx", length: 255
    t.index ["file_name"], name: "file_name_idx", length: 255
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_auth_user"], name: "id_auth_user__idx"
    t.index ["id_delivery"], name: "id_delivery__idx"
  end

  create_table "routing_rule", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account", null: false
    t.integer "id_provider", null: false
    t.integer "id_smpp_connection", null: false
    t.string "ported", limit: 1, null: false
    t.datetime "created_at"
    t.string "hidden", limit: 1
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_provider"], name: "id_provider__idx"
    t.index ["id_smpp_connection"], name: "id_smpp_connection__idx"
  end

  create_table "scheduler_run", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "task_id"
    t.string "status", limit: 512
    t.datetime "start_time"
    t.datetime "stop_time"
    t.text "run_output", size: :long
    t.text "run_result", size: :long
    t.text "traceback", size: :long
    t.string "worker_name", limit: 512
    t.index ["task_id"], name: "task_id__idx"
  end

  create_table "scheduler_task", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "application_name", limit: 512
    t.string "task_name", limit: 512
    t.string "group_name", limit: 512
    t.string "status", limit: 512
    t.string "function_name", limit: 512
    t.string "uuid"
    t.text "args", size: :long
    t.text "vars", size: :long
    t.string "enabled", limit: 1
    t.datetime "start_time"
    t.datetime "next_run_time"
    t.datetime "stop_time"
    t.integer "repeats"
    t.integer "retry_failed"
    t.string "prevent_drift", limit: 1
    t.integer "timeout"
    t.integer "sync_output"
    t.integer "times_run"
    t.integer "times_failed"
    t.datetime "last_run_time"
    t.string "assigned_worker_name", limit: 512
    t.string "cronline", limit: 512
    t.integer "period"
    t.index ["task_name"], name: "task_name_index", length: 255
    t.index ["uuid"], name: "uuid", unique: true
  end

  create_table "scheduler_task_deps", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "job_name", limit: 512
    t.integer "task_parent"
    t.integer "task_child"
    t.string "can_visit", limit: 1
    t.index ["task_child"], name: "task_child__idx"
  end

  create_table "scheduler_worker", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "worker_name"
    t.datetime "first_heartbeat"
    t.datetime "last_heartbeat"
    t.string "status", limit: 512
    t.string "is_ticker", limit: 1
    t.text "group_names", size: :long
    t.text "worker_stats", size: :long
    t.index ["worker_name"], name: "worker_name", unique: true
  end

  create_table "send_bulk_transactions", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "id_account", null: false
    t.integer "id_auth_user", null: false
    t.integer "status", default: 0
    t.string "send_type"
    t.string "observation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "token"
    t.index ["id_account"], name: "index_send_bulk_transactions_on_id_account"
    t.index ["id_auth_user"], name: "index_send_bulk_transactions_on_id_auth_user"
    t.index ["token"], name: "index_send_bulk_transactions_on_token", unique: true
  end

  create_table "short_link", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.integer "id_auth_user"
    t.string "id_unique", limit: 7, null: false
    t.string "link", limit: 512, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "clicks"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_auth_user"], name: "id_auth_user__idx"
    t.index ["id_unique"], name: "id_unique", unique: true
  end

  create_table "short_link_delivery", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.integer "id_short_link"
    t.integer "id_delivery"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_delivery"], name: "id_delivery__idx"
    t.index ["id_short_link"], name: "id_short_link__idx"
  end

  create_table "smpp_account", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.float "rate", limit: 53
    t.string "currency", limit: 512
    t.string "jasmin_username", limit: 512, null: false
    t.string "jasmin_password", limit: 512, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
  end

  create_table "smpp_balance", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_smpp_account"
    t.integer "balance"
    t.datetime "created_at"
    t.index ["created_at"], name: "smpp_balance_idx"
    t.index ["id_smpp_account"], name: "id_smpp_account__idx"
  end

  create_table "smpp_connection", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "name", limit: 512
    t.integer "tag"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.bigint "src_number"
    t.string "dst_format", limit: 512
  end

  create_table "smpp_connection_daily_traffic", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_smpp_connection"
    t.integer "amount"
    t.datetime "created_at"
    t.index ["created_at"], name: "smpp_connection_daily_traffic_idx"
    t.index ["id_smpp_connection"], name: "id_smpp_connection__idx"
  end

  create_table "smpp_connection_status_log", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_smpp_connection"
    t.string "status", limit: 1
    t.datetime "created_at"
    t.index ["created_at"], name: "smpp_connection_status_log_idx"
    t.index ["id_smpp_connection"], name: "id_smpp_connection__idx"
  end

  create_table "sms_incoming", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "id_unique", limit: 32, null: false
    t.integer "id_account"
    t.string "id_message", limit: 512, null: false
    t.string "src_provider", limit: 512
    t.bigint "e", null: false
    t.bigint "dst_number", null: false
    t.string "dst_country"
    t.text "sms_content", size: :long
    t.text "sms_content_hex", size: :long
    t.datetime "created_at"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_unique"], name: "id_unique", unique: true
  end

  create_table "sms_lyric", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_sms_outgoing", null: false
    t.integer "id_lyric", null: false
    t.string "success", limit: 1
    t.string "message_status", limit: 512
    t.string "delivery_status", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_sms_outgoing"], name: "id_sms_outgoing__idx"
  end

  create_table "sms_outgoing", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.string "id_unique", limit: 32, null: false
    t.integer "id_account"
    t.integer "id_delivery"
    t.string "id_jasmin", limit: 512
    t.string "status", limit: 512
    t.bigint "src_number", null: false
    t.bigint "dst_number", null: false
    t.text "sms_content", size: :long
    t.integer "multiplier"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string "dst_provider", limit: 512
    t.string "dst_country", limit: 512
    t.integer "attempts"
    t.integer "priority"
    t.string "dst_route_tag", limit: 64
    t.index ["created_at", "multiplier"], name: "sum_multiplier_idx"
    t.index ["created_at"], name: "created_at_idx"
    t.index ["dst_number"], name: "dst_number_idx"
    t.index ["id_account"], name: "id_account__idx"
    t.index ["id_delivery"], name: "id_delivery__idx"
    t.index ["id_jasmin"], name: "id_jasmin_idx", length: 255
    t.index ["id_unique"], name: "id_unique", unique: true
    t.index ["sms_content"], name: "sms_content", type: :fulltext
    t.index ["status", "created_at", "dst_provider"], name: "status_created_at_dst_provider_idx", length: { status: 255, dst_provider: 255 }
    t.index ["status"], name: "status_idx", length: 255
  end

  create_table "unsubscribed_email", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.string "src_email", limit: 512
    t.string "dst_email", limit: 512
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
  end

  create_table "unsubscribed_sms", id: :integer, charset: "utf8mb3", force: :cascade do |t|
    t.integer "id_account"
    t.bigint "src_number"
    t.bigint "dst_number"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["id_account"], name: "id_account__idx"
  end

  add_foreign_key "account", "addr_region_county", column: "id_county", name: "account_ibfk_1", on_delete: :cascade
  add_foreign_key "account_email", "account", column: "id_account", name: "account_email_ibfk_1", on_delete: :cascade
  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "addr_region", "addr_country", column: "country_id", name: "addr_region_ibfk_1", on_delete: :cascade
  add_foreign_key "addr_region_county", "addr_region", column: "region_id", name: "addr_region_county_ibfk_1", on_delete: :cascade
  add_foreign_key "auth_cas", "auth_user", column: "user_id", name: "auth_cas_ibfk_1", on_delete: :cascade
  add_foreign_key "auth_event", "auth_user", column: "user_id", name: "auth_event_ibfk_1", on_delete: :cascade
  add_foreign_key "auth_membership", "auth_group", column: "group_id", name: "auth_membership_ibfk_2", on_delete: :cascade
  add_foreign_key "auth_membership", "auth_user", column: "user_id", name: "auth_membership_ibfk_1", on_delete: :cascade
  add_foreign_key "auth_permission", "auth_group", column: "group_id", name: "auth_permission_ibfk_1", on_delete: :cascade
  add_foreign_key "auth_user", "account", column: "id_account", name: "auth_user_ibfk_1", on_delete: :cascade
  add_foreign_key "auth_user_api_key", "auth_user", column: "id_auth_user", name: "auth_user_api_key_ibfk_1", on_delete: :cascade
  add_foreign_key "auth_user_invitation", "account", column: "id_account", name: "auth_user_invitation_ibfk_1", on_delete: :cascade
  add_foreign_key "bank_transfer", "purchase", column: "id_purchase", name: "bank_transfer_ibfk_1", on_delete: :cascade
  add_foreign_key "basket", "product", column: "id_product", name: "basket_ibfk_2", on_delete: :cascade
  add_foreign_key "basket", "purchase", column: "id_purchase", name: "basket_ibfk_1", on_delete: :cascade
  add_foreign_key "client", "account", column: "id_account", name: "client_ibfk_1", on_delete: :cascade
  add_foreign_key "client_msg_transaction", "account", column: "id_account", name: "client_msg_transaction_ibfk_1", on_delete: :cascade
  add_foreign_key "client_msg_transaction", "client", column: "id_client", name: "client_msg_transaction_ibfk_2", on_delete: :cascade
  add_foreign_key "client_msg_transaction", "delivery", column: "id_delivery", name: "client_msg_transaction_ibfk_3", on_delete: :cascade
  add_foreign_key "contact_list", "account", column: "id_account", name: "contact_list_ibfk_1", on_delete: :cascade
  add_foreign_key "contact_list_data", "contact_list", column: "id_contact_list", name: "contact_list_data_ibfk_1", on_delete: :cascade
  add_foreign_key "delivery", "account", column: "id_account", name: "delivery_ibfk_1", on_delete: :cascade
  add_foreign_key "delivery", "auth_user", column: "id_auth_user", name: "delivery_ibfk_2", on_delete: :cascade
  add_foreign_key "delivery", "product", column: "id_product", name: "delivery_ibfk_3", on_delete: :cascade
  add_foreign_key "dlr", "sms_outgoing", column: "id_sms_outgoing", name: "dlr_ibfk_1", on_delete: :cascade
  add_foreign_key "elastic_number", "account", column: "id_account", name: "elastic_number_ibfk_1", on_delete: :cascade
  add_foreign_key "email", "account", column: "id_account", name: "email_ibfk_1", on_delete: :cascade
  add_foreign_key "email", "delivery", column: "id_delivery", name: "email_ibfk_2", on_delete: :cascade
  add_foreign_key "email_event", "account", column: "id_account", name: "email_event_ibfk_3", on_delete: :cascade
  add_foreign_key "email_event", "delivery", column: "id_delivery", name: "email_event_ibfk_2", on_delete: :cascade
  add_foreign_key "email_event", "email", column: "id_email", name: "email_event_ibfk_1", on_delete: :cascade
  add_foreign_key "email_transaction", "delivery", column: "id_delivery", name: "email_transaction_ibfk_2", on_delete: :cascade
  add_foreign_key "email_transaction", "money_transaction", column: "id_money_transaction", name: "email_transaction_ibfk_1", on_delete: :cascade
  add_foreign_key "email_transaction", "pricing_plan", column: "id_pricing_plan", name: "email_transaction_ibfk_3", on_delete: :cascade
  add_foreign_key "file_upload", "account", column: "id_account", name: "file_upload_ibfk_1", on_delete: :cascade
  add_foreign_key "file_upload", "auth_user", column: "id_auth_user", name: "file_upload_ibfk_2", on_delete: :cascade
  add_foreign_key "image_upload", "account", column: "id_account", name: "image_upload_ibfk_1", on_delete: :cascade
  add_foreign_key "image_upload", "auth_user", column: "id_auth_user", name: "image_upload_ibfk_2", on_delete: :cascade
  add_foreign_key "khipu_payment", "purchase", column: "id_purchase", name: "khipu_payment_ibfk_1", on_delete: :cascade
  add_foreign_key "money_transaction", "auth_user", column: "id_auth_user", name: "money_transaction_ibfk_1", on_delete: :cascade
  add_foreign_key "msg_template", "account", column: "id_account", name: "msg_template_ibfk_1", on_delete: :cascade
  add_foreign_key "msg_template", "auth_user", column: "id_auth_user", name: "msg_template_ibfk_2", on_delete: :cascade
  add_foreign_key "msg_template", "elastic_number", column: "id_elastic_number", name: "msg_template_ibfk_4", on_delete: :cascade
  add_foreign_key "msg_template", "product", column: "id_product", name: "msg_template_ibfk_3", on_delete: :cascade
  add_foreign_key "msg_transaction", "account", column: "id_account", name: "msg_transaction_ibfk_1", on_delete: :cascade
  add_foreign_key "msg_transaction", "delivery", column: "id_delivery", name: "msg_transaction_ibfk_3", on_delete: :cascade
  add_foreign_key "msg_transaction", "money_transaction", column: "id_money_transaction", name: "msg_transaction_ibfk_2", on_delete: :cascade
  add_foreign_key "msg_transaction", "pricing_plan", column: "id_pricing_plan", name: "msg_transaction_ibfk_4", on_delete: :cascade
  add_foreign_key "payment_method", "account", column: "id_account", name: "payment_method_ibfk_1", on_delete: :cascade
  add_foreign_key "paypal_payment", "purchase", column: "id_purchase", name: "paypal_payment_ibfk_1", on_delete: :cascade
  add_foreign_key "pricing_range", "product", column: "id_product", name: "pricing_range_ibfk_1", on_delete: :cascade
  add_foreign_key "purchase", "account", column: "id_account", name: "purchase_ibfk_1", on_delete: :cascade
  add_foreign_key "purchase", "auth_user", column: "id_auth_user", name: "purchase_ibfk_2", on_delete: :cascade
  add_foreign_key "report", "account", column: "id_account", name: "report_ibfk_1", on_delete: :cascade
  add_foreign_key "report", "auth_user", column: "id_auth_user", name: "report_ibfk_2", on_delete: :cascade
  add_foreign_key "report", "delivery", column: "id_delivery", name: "report_ibfk_3", on_delete: :cascade
  add_foreign_key "routing_rule", "account", column: "id_account", name: "routing_rule_ibfk_1", on_delete: :cascade
  add_foreign_key "routing_rule", "provider", column: "id_provider", name: "routing_rule_ibfk_2", on_delete: :cascade
  add_foreign_key "routing_rule", "smpp_connection", column: "id_smpp_connection", name: "routing_rule_ibfk_3", on_delete: :cascade
  add_foreign_key "scheduler_run", "scheduler_task", column: "task_id", name: "scheduler_run_ibfk_1", on_delete: :cascade
  add_foreign_key "scheduler_task_deps", "scheduler_task", column: "task_child", name: "scheduler_task_deps_ibfk_1", on_delete: :cascade
  add_foreign_key "short_link", "account", column: "id_account", name: "short_link_ibfk_1", on_delete: :cascade
  add_foreign_key "short_link", "auth_user", column: "id_auth_user", name: "short_link_ibfk_2", on_delete: :cascade
  add_foreign_key "smpp_account", "account", column: "id_account", name: "smpp_account_ibfk_1", on_delete: :cascade
  add_foreign_key "smpp_balance", "smpp_account", column: "id_smpp_account", name: "smpp_balance_ibfk_1", on_delete: :cascade
  add_foreign_key "smpp_connection_daily_traffic", "smpp_connection", column: "id_smpp_connection", name: "smpp_connection_daily_traffic_ibfk_1", on_delete: :cascade
  add_foreign_key "smpp_connection_status_log", "smpp_connection", column: "id_smpp_connection", name: "smpp_connection_status_log_ibfk_1", on_delete: :cascade
  add_foreign_key "sms_incoming", "account", column: "id_account", name: "sms_incoming_ibfk_1", on_delete: :cascade
  add_foreign_key "sms_lyric", "sms_outgoing", column: "id_sms_outgoing", name: "sms_lyric_ibfk_1", on_delete: :cascade
  add_foreign_key "sms_outgoing", "account", column: "id_account", name: "sms_outgoing_ibfk_1", on_delete: :cascade
  add_foreign_key "sms_outgoing", "delivery", column: "id_delivery", name: "sms_outgoing_ibfk_2", on_delete: :cascade
  add_foreign_key "unsubscribed_email", "account", column: "id_account", name: "unsubscribed_email_ibfk_1", on_delete: :cascade
  add_foreign_key "unsubscribed_sms", "account", column: "id_account", name: "unsubscribed_sms_ibfk_1", on_delete: :cascade
end
