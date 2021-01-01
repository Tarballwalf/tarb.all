var link = document.createElement('meta');
link.setAttribute('property', 'og:title');
link.content = document.title;
document.getElementsByTagName('head')[0].appendChild(link)

var link = document.createElement('meta');
link.setAttribute('property', 'title');
link.content = document.title;
document.getElementsByTagName('head')[0].appendChild(link);