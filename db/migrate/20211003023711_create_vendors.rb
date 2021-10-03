class CreateVendors < ActiveRecord::Migration[6.0]
  def change
    create_table :vendors do |t|
      t.string :name
      t.string :company
      t.string :phone
      t.string :email
      t.string :description
      t.string :liabilityRequire
      t.string :snackBring
      t.string :snacks

      t.timestamps
    end
  end
end
