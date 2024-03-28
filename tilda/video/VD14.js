
    // Определяем переменную для хранения ссылки на текущий iframe
    let currentIframe = null;

    function displayVideo(videoId) {
        const videoData = VD14playlist[videoId];
        const videoPlayerContainer = document.querySelector('.t937__video');
        const descriptionColumn = document.querySelector('.t937__col_description');
        const subheadingTitle = document.querySelector('.t937__subheading-title');

        // Удаление элемента с классом t937__system-message из контейнера t937__video
        const systemMessage = videoPlayerContainer.querySelector('.t937__system-message');
        if (systemMessage) {
            systemMessage.remove();
        }

        // Создание и добавление iframe в контейнер t937__video, если его нет
        if (!currentIframe) {
            currentIframe = document.createElement('iframe');
            currentIframe.classList.add('t937__video-frame');
            currentIframe.width = '100%';
            currentIframe.height = '100%';
            currentIframe.frameBorder = '0';
            currentIframe.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture';
            currentIframe.allowFullscreen = true;
            currentIframe.setAttribute('autoplay', '');
            videoPlayerContainer.appendChild(currentIframe);
        }

        // Обновление src атрибута текущего iframe для загрузки нового видео
        currentIframe.src = `https://drive.google.com/file/d/${videoData.url.split('/').pop()}/preview`;

        // Обновление названия и заметки выбранного видео
        document.querySelector('.t937__video-title').textContent = videoData.title;
        document.querySelector('.t937__video-description').textContent = videoData.note;

        // Удаление класса t937__playlist-link_active у всех элементов плейлиста
        const playlistItems = document.querySelectorAll('.t937__playlist-item');
        playlistItems.forEach(item => {
            item.classList.remove('t937__playlist-link_active');
        });

        // Добавление класса t937__playlist-link_active к выбранному элементу плейлиста
        const selectedPlaylistItem = document.querySelector(`.t937__playlist-item[data-video-id="${videoId}"]`);
        selectedPlaylistItem.classList.add('t937__playlist-link_active');

        // Удаление класса t937__col_hidden у элемента t937__col_description
        descriptionColumn.classList.remove('t937__col_hidden');

        // Обновление количества элементов в блоке с классом t937__subheading-title
        const playlistItemCount = Object.keys(playlist).length;
        subheadingTitle.textContent = `Всего элементов: ${playlistItemCount}`;
    }

    // Создание элементов плейлиста
    const playlistContainer = document.querySelector('.t937__playlist');
    for (const key in VD14playlist) {
        if (VD14playlist.hasOwnProperty(key)) {
            const listItem = document.createElement('div');
            listItem.classList.add('t937__playlist-item');
            listItem.dataset.videoId = key;

            const playlistLink = document.createElement('div');
            playlistLink.classList.add('t937__playlist-link', 't-text', 't-text_xs');

            const playlistNumber = document.createElement('div');
            playlistNumber.classList.add('t937__playlist-number');
            playlistNumber.textContent = key;

            const playlistTitle = document.createElement('div');
            playlistTitle.classList.add('t937__playlist-title');
            playlistTitle.textContent = VD14playlist[key].title;

            const playlistTime = document.createElement('div');
            playlistTime.classList.add('t937__playlist-time');
            playlistTime.textContent = VD14playlist[key].time;

            playlistLink.appendChild(playlistNumber);
            playlistLink.appendChild(playlistTitle);
            playlistLink.appendChild(playlistTime);

            listItem.appendChild(playlistLink);

            listItem.addEventListener('click', function() {
                displayVideo(key);
            });

            playlistContainer.appendChild(listItem);
        }
    }

    // Отображение первого видео из плейлиста по умолчанию
    displayVideo(1);
