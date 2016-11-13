// Exercise: Find the top navbar by query for the element type, which is <nav>.
$('nav');
// Exercise: Find the sidebar on the right by using it's id.
$('#sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
$('.pages');
$('.groups');
// Exercise: Find all of the comments on the page.
$('.panel');
// Exercise: Find the first comment on the page.
$('.panel:first');
// Exercise: Find the last comment on the page.
$('.panel:last');
// Exercise: Find the fourth comment on the page.
$('panel.get(3)');
// Exercise: Find one of the ads in the sidebar and use .hide() to hide it.
$('.add-slot:nth-child(1)').hide();
// Exercise: Use .show() to make the ad that you hid in the previous step visible again.
$('.add-slot:nth-child(1)').show();
// Exercise: Use .toggle() to toggle the display of the nav bar at the top of the page.
$('.top-bar').toggle()
// Exercise: Use .attr() to change src attribute of one of the ads in the sidebar. Here's an image source if you need one: http://placebear.com/200/300.
$('.ad-slot:nth-child(1) img').attr('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
$('.media-body').eq(8).find('p').eq(0).text('this is hard AF');
// Exercise: Find the first post and use .addClass() to add the .post-liked class to it.
$('.post').eq(0).addClass('post-liked');
// Exercise: Find the second post and use .removeClass() to remove the .post-liked class.
$('.post').eq(1).removeClass('post-liked');
// Exercise: Find any post and use .toggleClass() to toggle the .post-liked class.
$('.post').eq(0).toggleClass('post-liked');
