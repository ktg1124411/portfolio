function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}
