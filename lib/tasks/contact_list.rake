# rake contact_list:migrate_header
namespace :contact_list do
  task migrate_header: :environment do

    total_completed = 0

    ContactList.includes(:contact_list_data).where(header: nil)
               .find_in_batches(batch_size: 5000).each_with_index do |list, index|

        puts "######## Inicia lote #{index + 1} ##########"

        list.each do |c|
          contact_list_data = c.contact_list_data
          next unless contact_list_data.present?

          contact_data = contact_list_data.contact_data
          next if !contact_data.present? || contact_data[0..1] != '[['

          varchar = ''

          contact_data.each_char do |char|
            varchar += char
            break if char == ']'
          end

          c.update(header: varchar.gsub('[[', '[').gsub('\\', '"').gsub('" ', '"').gsub(' "', '"'))
          total_completed += 1
        end

        puts "######## Fin lote #{index + 1} #############"
    end

    contact_list = ContactList.where(header: nil)

    puts ""

    if contact_list.present?
      puts 'Finalizo con algunas alertas #########################'
      puts 'Algunos registros aun tienen el header null'
      puts "total lista de contactos sin contact_list_data #{contact_list.size}"
      puts "######################################################"
    else
      puts 'Finalizo con Exito #########################'
    end

    puts "Total completados con exito #{total_completed}"
  end
end
