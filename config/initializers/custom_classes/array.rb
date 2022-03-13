class Array
  # class Array
  def included_in? array
    array.to_set.superset?(self.to_set)
  end

  # Calcula los elementos repetidos en un array y devuelve otro array con ellos
  def repeated_elements
    self.find_all { |e| self.count(e) > 1 }.uniq
  end

  # Busca la primera coincidencia la elimina y la retorna
  # array.detect!{ -> (x) {x == 5} }
  def detect!(&block)
    return 'No block given' unless block

    each_with_index do |result, i|
      lambda = yield
      next unless lambda.call(result)

      delete_at(i)
      return result
    end

    nil
  rescue StandardError
  end
end
