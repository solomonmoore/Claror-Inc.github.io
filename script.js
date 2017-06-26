$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).FadeTo(1, 'Fast')
   })
   $('div').mouseleave(function() {
       $(this).FadeTo(0.5, 'Fast')
   })
