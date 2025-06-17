document.addEventListener('DOMContentLoaded', function() {
    const worksLink = document.querySelectorAll('a[href="works.html"]');

    worksLink.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('作業內容將在這裡顯示！');
            // 這裡可以添加更多的互動功能，例如載入作業內容
        });
    });
});