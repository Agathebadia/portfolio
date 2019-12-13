class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :url
      t.text :description
      t.string :tech_stack

      t.timestamps
    end
  end
end
