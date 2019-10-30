<p>Для просмотра приложения вам понадобятся:</p>
<ul>
  <li>virtualbox (<a href="https://www.virtualbox.org/">Скачать</a>)</li>
  <li>vagrant(<a href="https://www.vagrantup.com/">Скачать</a>)</li>
</ul>

<p>После скачивания данных программ, вам нужно выполнить следующие пункты</p>
<h3>Для macOS(unix системы)</h3>
<ol> 
  <li>Устанавливаем VirtualBox</li>
  <li>Устанавливаем Vagrant</li>
  <li>Разворачиваем Homestead<br>
    <pre>
    vagrant box add laravel/homestead
    git clone https://github.com/pr0fan/homstade.git Homestead
    cd Homestead
    bash init.sh
    cd ..
    ssh-keygen -t rsa -C "your@email.com"
    </pre>
  </li>
  <li>Настраиваем Homestead<br>
  
    Создаем папку под проект /Users/<ваш-пользователь>/Projects/
    Открываем файл Homestead/Homestead.yaml и меняем его содержимое на:
    
    ip: "192.168.10.10"
    memory: 2048
    cpus: 1
    provider: virtualbox

    authorize: ~/.ssh/id_rsa.pub

    keys:
        - ~/.ssh/id_rsa

    folders:
        - map: ~/Projects
          to: /home/vagrant/Projects

    sites:
        - map: user.test
          to: /home/vagrant/Projects/app/User/public

    databases:
        - homestead
  </li>
 <li>
  В файле etc/hosts прописываем<br>
  192.168.10.10 user.test
 </li>
 <li>
  Переходим в созданную папку Project (/Users/<ваш-пользователь>/Projects/)<br>
  запускаем git clone https://github.com/pr0fan/app.git
 </li>
 <li>Переходим в папку Homestead (cd ~/Homestead/)</li>
 <li>
  <pre>
  Запускаем vagrant up
  vagrant ssh
  cd Projects/app/User/
  composer install
  touch .env
  переходим в файл .env и в него вставляем
  </pre>
  <pre>
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=https://user.test

  LOG_CHANNEL=stack

  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=homestead
  DB_USERNAME=root
  DB_PASSWORD=secret

  BROADCAST_DRIVER=log
  CACHE_DRIVER=file
  QUEUE_CONNECTION=sync
  SESSION_DRIVER=file
  SESSION_LIFETIME=120

  REDIS_HOST=127.0.0.1
  REDIS_PASSWORD=null
  REDIS_PORT=6379

  MAIL_DRIVER=smtp
  MAIL_HOST=smtp.mailtrap.io
  MAIL_PORT=2525
  MAIL_USERNAME=null
  MAIL_PASSWORD=null
  MAIL_ENCRYPTION=null

  AWS_ACCESS_KEY_ID=
  AWS_SECRET_ACCESS_KEY=
  AWS_DEFAULT_REGION=us-east-1
  AWS_BUCKET=

  PUSHER_APP_ID=
  PUSHER_APP_KEY=
  PUSHER_APP_SECRET=
  PUSHER_APP_CLUSTER=mt1

  MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
  MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
  </pre>
  <pre>
   php artisan migrate
   cd frontend/
   npm install
   npm run build
  </pre>
  </li>
</ol>

<h3>В баузере откройте https://user.test/users<h3>

<h3>Для Windows</h3>
<ol> 
  <li>Устанавливаем VirtualBox</li>
  <li>Устанавливаем Vagrant</li>
  <li>Разворачиваем Homestead<br>
    <pre>
    vagrant box add laravel/homestead
    git clone https://github.com/pr0fan/homstade.git c:/Homestead
    cd c:/Homestead
    init.bat или перейдите в c:/Homestead с помощью файлового менеджера и кликните по файлу init.bat
    cd ..
    ssh-keygen -t rsa -C "your@email.com"
    </pre>
  </li>
  <li>Настраиваем Homestead<br>
  
    Создаем папку под проект c:/Projects/
    Открываем файл c:/Homestead/Homestead.yaml и меняем его содержимое на:
    
    ip: "192.168.10.10"
    memory: 2048
    cpus: 1
    provider: virtualbox
    
    authorize: Windows-путь до публичного SSH-ключа (c:/Users/USER_NAME/.ssh/id_rsa.pub)
    
    keys:
       - Windows-путь до приватного SSH-ключа (c:/Users/USER_NAME/.ssh/id_rsa)
       
    folders:
        - map: c:/Projects/
          to: /home/vagrant/Projects

    sites:
        - map: user.test
          to: /home/vagrant/Projects/app/User/public

    databases:
        - homestead
  </li>
 <li>
  В файле c:/Windows/System32/drivers/etc/hosts прописываем<br>
  192.168.10.10 user.test
 </li>
 <li>
  Переходим в созданную папку Project (c:/Projects/)<br>
  запускаем git clone https://github.com/pr0fan/app.git
 </li>
 <li>Переходим в папку Homestead (cd c:/Homestead)</li>
 <li>
  <pre>
  Запускаем vagrant up
  vagrant ssh
  cd Projects/app/User/
  composer install
  touch .env
  переходим в файл .env и в него вставляем
  </pre>
  <pre>
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=https://user.test

  LOG_CHANNEL=stack

  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=homestead
  DB_USERNAME=root
  DB_PASSWORD=secret

  BROADCAST_DRIVER=log
  CACHE_DRIVER=file
  QUEUE_CONNECTION=sync
  SESSION_DRIVER=file
  SESSION_LIFETIME=120

  REDIS_HOST=127.0.0.1
  REDIS_PASSWORD=null
  REDIS_PORT=6379

  MAIL_DRIVER=smtp
  MAIL_HOST=smtp.mailtrap.io
  MAIL_PORT=2525
  MAIL_USERNAME=null
  MAIL_PASSWORD=null
  MAIL_ENCRYPTION=null

  AWS_ACCESS_KEY_ID=
  AWS_SECRET_ACCESS_KEY=
  AWS_DEFAULT_REGION=us-east-1
  AWS_BUCKET=

  PUSHER_APP_ID=
  PUSHER_APP_KEY=
  PUSHER_APP_SECRET=
  PUSHER_APP_CLUSTER=mt1

  MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
  MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
  </pre>
  
  <pre>
   php artisan migrate
   cd frontend/
   npm install
   npm run build
  </pre>
  </li>
</ol>

<h3>В баузере откройте https://user.test/users<h3>
