'use strict';

// jQuery 팩토리 함수
// JS 팩토리 패턴

// ES6
(function ($) {
  'use strict';

  $.capitalize = function (words, divider) {
    return $.map(words.split(divider), function (word) {
      return word.replace(/^./, function ($1) {
        return $1.toUpperCase();
      });
    }).join(' ');
  };
})(window.jQuery);

(function (global, $) {
  'use strict';

  var $body = $('body');

  console.log('$body.jquery:', $body.jquery);

  // --------------------------

  // var $wrapper_header = $('.wrapper h1, .wrapper h2');
  // let $wrapper = $('.wrapper');
  // 선택자가 아닌 경우
  var $wrapper = $(document.querySelector('.wrapper'));
  // $() 두번째 인자로 컨텍스트 객체가 올 수 있다.
  // let $wrapper_header = $(':header', $wrapper);
  // 탐색 인스턴스 메서드 .find(), .children() 활용
  var $wrapper_header = $wrapper.find(':header');

  console.log('$wrapper_header:', $wrapper_header);

  $wrapper_header.css('font-size', '+=30px');

  // LIBRARY, FRAMEWORK => Model
  var web_techniques = {
    'css': {
      'type': 'framework',
      'resources': ['twitter bootstrap', 'bulma', 'zurb foundation']
    },
    'js': {
      'type': 'library',
      'resources': ['jquery', 'dojo', 'mootools', 'yui']
    }
  };

  global.web_techniques = web_techniques;

  // 동적으로 요소를 추가해서 Wrapper_header 내부에 코드 삽입
  var lang = Object.keys(web_techniques)[0];
  var lang_type = web_techniques.css.type;
  var lang_resources = web_techniques.css.resources;
  var html_template = ['<ul class="' + lang + '-' + lang_type + '">', '<li><a href="#!' + lang_resources[0] + '">' + $.capitalize(lang_resources[0]) + '</a></li>', '<li><a href="#!' + lang_resources[1] + '">' + $.capitalize(lang_resources[1]) + '</a></li>', '<li><a href="#!' + lang_resources[2] + '">' + $.capitalize(lang_resources[2]) + '</a></li>', '</ul>'].join('\t');

  console.log(html_template);

  $('<ul class="css-framworks">\n        <li><a href="#!bootstrap">Bootstrap</a></li>\n        <li class="active"><a href="#!bulma">Bulma</a></li>\n        <li><a href="#!foundation">Foundation</a></li>\n      </ul>').prependTo($wrapper);
})(window, window.jQuery);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9qcXVlcnkuYWN0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJjYXBpdGFsaXplIiwid29yZHMiLCJkaXZpZGVyIiwibWFwIiwic3BsaXQiLCJ3b3JkIiwicmVwbGFjZSIsIiQxIiwidG9VcHBlckNhc2UiLCJqb2luIiwid2luZG93IiwialF1ZXJ5IiwiZ2xvYmFsIiwiJGJvZHkiLCJjb25zb2xlIiwibG9nIiwianF1ZXJ5IiwiJHdyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkd3JhcHBlcl9oZWFkZXIiLCJmaW5kIiwiY3NzIiwid2ViX3RlY2huaXF1ZXMiLCJsYW5nIiwiT2JqZWN0Iiwia2V5cyIsImxhbmdfdHlwZSIsInR5cGUiLCJsYW5nX3Jlc291cmNlcyIsInJlc291cmNlcyIsImh0bWxfdGVtcGxhdGUiLCJwcmVwZW5kVG8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBLENBQUMsYUFBSTtBQUNIOztBQUVBQSxJQUFFQyxVQUFGLEdBQWEsVUFBQ0MsS0FBRCxFQUFPQyxPQUFQO0FBQUEsV0FBaUJILEVBQUVJLEdBQUYsQ0FBTUYsTUFBTUcsS0FBTixDQUFZRixPQUFaLENBQU4sRUFBMkI7QUFBQSxhQUFNRyxLQUFLQyxPQUFMLENBQWEsSUFBYixFQUFrQjtBQUFBLGVBQUlDLEdBQUdDLFdBQUgsRUFBSjtBQUFBLE9BQWxCLENBQU47QUFBQSxLQUEzQixFQUEwRUMsSUFBMUUsQ0FBK0UsR0FBL0UsQ0FBakI7QUFBQSxHQUFiO0FBRUQsQ0FMRCxFQUtHQyxPQUFPQyxNQUxWOztBQVlBLENBQUMsVUFBQ0MsTUFBRCxFQUFTYixDQUFULEVBQWE7QUFDWjs7QUFFQSxNQUFJYyxRQUFRZCxFQUFFLE1BQUYsQ0FBWjs7QUFFQWUsVUFBUUMsR0FBUixDQUFZLGVBQVosRUFBNkJGLE1BQU1HLE1BQW5DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUlDLFdBQVdsQixFQUFHbUIsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFILENBQWY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJQyxrQkFBa0JILFNBQVNJLElBQVQsQ0FBYyxTQUFkLENBQXRCOztBQUVBUCxVQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0NLLGVBQWhDOztBQUVBQSxrQkFBZ0JFLEdBQWhCLENBQW9CLFdBQXBCLEVBQWlDLFFBQWpDOztBQUVBO0FBQ0EsTUFBSUMsaUJBQWlCO0FBQ25CLFdBQU87QUFDTCxjQUFRLFdBREg7QUFFTCxtQkFBYSxDQUNYLG1CQURXLEVBQ1UsT0FEVixFQUNtQixpQkFEbkI7QUFGUixLQURZO0FBT25CLFVBQU07QUFDSixjQUFRLFNBREo7QUFFSixtQkFBYSxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLFVBQW5CLEVBQStCLEtBQS9CO0FBRlQ7QUFQYSxHQUFyQjs7QUFhQVgsU0FBT1csY0FBUCxHQUF3QkEsY0FBeEI7O0FBRUE7QUFDQSxNQUFJQyxPQUFPQyxPQUFPQyxJQUFQLENBQVlILGNBQVosRUFBNEIsQ0FBNUIsQ0FBWDtBQUNBLE1BQUlJLFlBQVlKLGVBQWVELEdBQWYsQ0FBbUJNLElBQW5DO0FBQ0EsTUFBSUMsaUJBQWlCTixlQUFlRCxHQUFmLENBQW1CUSxTQUF4QztBQUNBLE1BQUlDLGdCQUFnQixDQUNsQixnQkFBZVAsSUFBZixHQUFxQixHQUFyQixHQUEyQkcsU0FBM0IsR0FBdUMsSUFEckIsc0JBRUVFLGVBQWUsQ0FBZixDQUZGLFVBRXdCOUIsRUFBRUMsVUFBRixDQUFhNkIsZUFBZSxDQUFmLENBQWIsQ0FGeEIsb0NBR0VBLGVBQWUsQ0FBZixDQUhGLFVBR3dCOUIsRUFBRUMsVUFBRixDQUFhNkIsZUFBZSxDQUFmLENBQWIsQ0FIeEIsb0NBSUVBLGVBQWUsQ0FBZixDQUpGLFVBSXdCOUIsRUFBRUMsVUFBRixDQUFhNkIsZUFBZSxDQUFmLENBQWIsQ0FKeEIsZ0JBS2xCLE9BTGtCLEVBTWxCcEIsSUFOa0IsQ0FNYixJQU5hLENBQXBCOztBQVFBSyxVQUFRQyxHQUFSLENBQVlnQixhQUFaOztBQUdBaEMsME5BSVlpQyxTQUpaLENBSXVCZixRQUp2QjtBQU1ELENBM0RELEVBMkRHUCxNQTNESCxFQTJEV0EsT0FBT0MsTUEzRGxCIiwiZmlsZSI6ImpxdWVyeS5hY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBqUXVlcnkg7Yyp7Yag66asIO2VqOyImFxuLy8gSlMg7Yyp7Yag66asIO2MqO2EtFxuXG4vLyBFUzZcbigkPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgJC5jYXBpdGFsaXplPSh3b3JkcyxkaXZpZGVyKT0+JC5tYXAod29yZHMuc3BsaXQoZGl2aWRlciksd29yZD0+d29yZC5yZXBsYWNlKC9eLi8sJDE9PiQxLnRvVXBwZXJDYXNlKCkpKS5qb2luKCcgJyk7XG5cbn0pKHdpbmRvdy5qUXVlcnkpO1xuXG5cblxuXG5cblxuKChnbG9iYWwsICQpPT57XG4gICd1c2Ugc3RyaWN0JztcblxuICBsZXQgJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgY29uc29sZS5sb2coJyRib2R5LmpxdWVyeTonLCAkYm9keS5qcXVlcnkpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gdmFyICR3cmFwcGVyX2hlYWRlciA9ICQoJy53cmFwcGVyIGgxLCAud3JhcHBlciBoMicpO1xuICAvLyBsZXQgJHdyYXBwZXIgPSAkKCcud3JhcHBlcicpO1xuICAvLyDshKDtg53snpDqsIAg7JWE64uMIOqyveyasFxuICBsZXQgJHdyYXBwZXIgPSAkKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpICk7XG4gIC8vICQoKSDrkZDrsojsp7gg7J247J6Q66GcIOy7qO2FjeyKpO2KuCDqsJ3ssrTqsIAg7JisIOyImCDsnojri6QuXG4gIC8vIGxldCAkd3JhcHBlcl9oZWFkZXIgPSAkKCc6aGVhZGVyJywgJHdyYXBwZXIpO1xuICAvLyDtg5Dsg4kg7J247Iqk7YS07IqkIOuplOyEnOuTnCAuZmluZCgpLCAuY2hpbGRyZW4oKSDtmZzsmqlcbiAgbGV0ICR3cmFwcGVyX2hlYWRlciA9ICR3cmFwcGVyLmZpbmQoJzpoZWFkZXInKTtcblxuICBjb25zb2xlLmxvZygnJHdyYXBwZXJfaGVhZGVyOicsICR3cmFwcGVyX2hlYWRlcik7XG5cbiAgJHdyYXBwZXJfaGVhZGVyLmNzcygnZm9udC1zaXplJywgJys9MzBweCcpO1xuXG4gIC8vIExJQlJBUlksIEZSQU1FV09SSyA9PiBNb2RlbFxuICBsZXQgd2ViX3RlY2huaXF1ZXMgPSB7XG4gICAgJ2Nzcyc6IHtcbiAgICAgICd0eXBlJzogJ2ZyYW1ld29yaycsXG4gICAgICAncmVzb3VyY2VzJzogW1xuICAgICAgICAndHdpdHRlciBib290c3RyYXAnLCAnYnVsbWEnLCAnenVyYiBmb3VuZGF0aW9uJ1xuICAgICAgXVxuICAgIH0sXG4gICAgJ2pzJzoge1xuICAgICAgJ3R5cGUnOiAnbGlicmFyeScsXG4gICAgICAncmVzb3VyY2VzJzogWydqcXVlcnknLCAnZG9qbycsICdtb290b29scycsICd5dWknXVxuICAgIH1cbiAgfTtcblxuICBnbG9iYWwud2ViX3RlY2huaXF1ZXMgPSB3ZWJfdGVjaG5pcXVlcztcblxuICAvLyDrj5nsoIHsnLzroZwg7JqU7IaM66W8IOy2lOqwgO2VtOyEnCBXcmFwcGVyX2hlYWRlciDrgrTrtoDsl5Ag7L2U65OcIOyCveyehVxuICBsZXQgbGFuZyA9IE9iamVjdC5rZXlzKHdlYl90ZWNobmlxdWVzKVswXTtcbiAgdmFyIGxhbmdfdHlwZSA9IHdlYl90ZWNobmlxdWVzLmNzcy50eXBlO1xuICB2YXIgbGFuZ19yZXNvdXJjZXMgPSB3ZWJfdGVjaG5pcXVlcy5jc3MucmVzb3VyY2VzO1xuICBsZXQgaHRtbF90ZW1wbGF0ZSA9IFtcbiAgICAnPHVsIGNsYXNzPVwiJysgbGFuZyArJy0nICsgbGFuZ190eXBlICsgJ1wiPicsXG4gICAgICBgPGxpPjxhIGhyZWY9XCIjISR7bGFuZ19yZXNvdXJjZXNbMF19XCI+JHskLmNhcGl0YWxpemUobGFuZ19yZXNvdXJjZXNbMF0pfTwvYT48L2xpPmAsXG4gICAgICBgPGxpPjxhIGhyZWY9XCIjISR7bGFuZ19yZXNvdXJjZXNbMV19XCI+JHskLmNhcGl0YWxpemUobGFuZ19yZXNvdXJjZXNbMV0pfTwvYT48L2xpPmAsXG4gICAgICBgPGxpPjxhIGhyZWY9XCIjISR7bGFuZ19yZXNvdXJjZXNbMl19XCI+JHskLmNhcGl0YWxpemUobGFuZ19yZXNvdXJjZXNbMl0pfTwvYT48L2xpPmAsXG4gICAgJzwvdWw+J1xuICBdLmpvaW4oJ1xcdCcpO1xuXG4gIGNvbnNvbGUubG9nKGh0bWxfdGVtcGxhdGUpO1xuXG5cbiAgJChgPHVsIGNsYXNzPVwiY3NzLWZyYW13b3Jrc1wiPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiMhYm9vdHN0cmFwXCI+Qm9vdHN0cmFwPC9hPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjIWJ1bG1hXCI+QnVsbWE8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjIWZvdW5kYXRpb25cIj5Gb3VuZGF0aW9uPC9hPjwvbGk+XG4gICAgICA8L3VsPmApLnByZXBlbmRUbyggJHdyYXBwZXIgKTtcblxufSkod2luZG93LCB3aW5kb3cualF1ZXJ5KTtcbiJdfQ==