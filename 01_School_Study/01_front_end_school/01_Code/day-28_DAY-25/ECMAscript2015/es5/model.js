'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Model.js
// Model.es6

// Class Model
// Instance
// - CRUD
// - get()
// - post()
// - put()
// - delete()

// Private
// dataList 공개하지 않음
var Employee = function () {
  function Employee() {
    _classCallCheck(this, Employee);
  }

  _createClass(Employee, [{
    key: 'construnctor',
    value: function construnctor(name) {
      this._name = name;
    }
  }, {
    key: 'name',
    get: function get() {
      if (this._name) {
        return this._name.toUpperCase() + '양';
      } else {
        return undefined;
      };
    },
    set: function set(newName) {
      if (newName == this.name) {
        console.log("이미 같은 이름을 쓰고 있습니다.");
      } else if (newName) {
        this._new = newName;
      } else {
        return false;
      }
    }
  }]);

  return Employee;
}();

var emp = new Employee('솔지');

if (emp.name) {
  console.log(emp.name); //솔지양
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tb2RlbC5qcyJdLCJuYW1lcyI6WyJFbXBsb3llZSIsIm5hbWUiLCJfbmFtZSIsInRvVXBwZXJDYXNlIiwidW5kZWZpbmVkIiwibmV3TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJfbmV3IiwiZW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7SUFDTUEsUTs7Ozs7OztpQ0FDU0MsSSxFQUFLO0FBQ2hCLFdBQUtDLEtBQUwsR0FBYUQsSUFBYjtBQUNEOzs7d0JBQ1M7QUFDUixVQUFHLEtBQUtDLEtBQVIsRUFBYztBQUNaLGVBQU8sS0FBS0EsS0FBTCxDQUFXQyxXQUFYLEtBQTJCLEdBQWxDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0MsU0FBUDtBQUNEO0FBQ0YsSztzQkFDUUMsTyxFQUFRO0FBQ2YsVUFBSUEsV0FBVyxLQUFLSixJQUFwQixFQUF5QjtBQUN2QkssZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNELE9BRkQsTUFFTSxJQUFJRixPQUFKLEVBQVk7QUFDaEIsYUFBS0csSUFBTCxHQUFZSCxPQUFaO0FBQ0QsT0FGSyxNQUVDO0FBQ0wsZUFBTyxLQUFQO0FBQ0Q7QUFDRjs7Ozs7O0FBR0gsSUFBSUksTUFBTSxJQUFJVCxRQUFKLENBQWEsSUFBYixDQUFWOztBQUVBLElBQUlTLElBQUlSLElBQVIsRUFBYTtBQUNYSyxVQUFRQyxHQUFSLENBQVlFLElBQUlSLElBQWhCLEVBRFcsQ0FDWTtBQUN4QiIsImZpbGUiOiJtb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZGVsLmpzXG4vLyBNb2RlbC5lczZcblxuLy8gQ2xhc3MgTW9kZWxcbi8vIEluc3RhbmNlXG4vLyAtIENSVURcbi8vIC0gZ2V0KClcbi8vIC0gcG9zdCgpXG4vLyAtIHB1dCgpXG4vLyAtIGRlbGV0ZSgpXG5cbi8vIFByaXZhdGVcbi8vIGRhdGFMaXN0IOqzteqwnO2VmOyngCDslYrsnYxcbmNsYXNzIEVtcGxveWVlIHtcbiAgY29uc3RydW5jdG9yKG5hbWUpe1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICB9XG4gIGdldCBuYW1lKCl7XG4gICAgaWYodGhpcy5fbmFtZSl7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZS50b1VwcGVyQ2FzZSgpICsgJ+yWkSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfTtcbiAgc2V0IG5hbWUobmV3TmFtZSl7XG4gICAgaWYgKG5ld05hbWUgPT0gdGhpcy5uYW1lKXtcbiAgICAgIGNvbnNvbGUubG9nKFwi7J2066+4IOqwmeydgCDsnbTrpoTsnYQg7JOw6rOgIOyeiOyKteuLiOuLpC5cIik7XG4gICAgfWVsc2UgaWYgKG5ld05hbWUpe1xuICAgICAgdGhpcy5fbmV3ID0gbmV3TmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZW1wID0gbmV3IEVtcGxveWVlKCfshpTsp4AnKTtcblxuaWYgKGVtcC5uYW1lKXtcbiAgY29uc29sZS5sb2coZW1wLm5hbWUpOyAvL+yGlOyngOyWkVxufVxuIl19