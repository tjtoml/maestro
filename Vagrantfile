Vagrant.configure(2) do |config|
  # Run Ansible from the Vagrant VM
  config.vm.box = "ubuntu/trusty64"
  config.vm.synced_folder ".", "/home/vagrant/Code", create: true
  config.vm.synced_folder "./node_modules", "/home/vagrant/Code/node_modules", disabled: true
  config.vm.network "private_network", ip: "192.168.50.4"
  #config.vm.network "forwarded_port", guest: 27017, host: 2700
  config.vm.provision "shell",
    inline: "sudo apt-get install software-properties-common && sudo apt-add-repository ppa:ansible/ansible && apt-get update && apt-get install -y ansible && ansible-playbook -i 'localhost,' -c local /home/vagrant/Code/playbook.yml"
end