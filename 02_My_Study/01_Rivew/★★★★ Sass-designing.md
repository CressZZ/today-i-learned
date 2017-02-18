#  [SASS 설계도!](https://sass-guidelin.es/ko/#section-40)

# 1. '7-1' 패턴

- 폴더 7개, 파일 1개. 기본적으로, 7개의 다른 폴더에 채워넣은 모든 부분 파일과, 이들을 불러들여 CSS 스타일시트로 컴파일하는 루트 레벨에 있는 하나의 파일(대개 `main.scss`)을 갖게 됩니다.

- `base/`
- `components/`
- `layout/`
- `pages/`
- `themes/`
- `utils/`
- `vendors/`

그리고 물론:

- `main.scss`

```
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # 타이포그래피 규칙
|   …                    # 기타.
|
|– components/
|   |– _buttons.scss     # 버튼
|   |– _carousel.scss    # 캐러셀 **회전목마?, 컨베이어?**
|   |– _cover.scss       # 커버
|   |– _dropdown.scss    # 드롭다운
|   …                    # 기타.
|
|– layout/
|   |– _navigation.scss  # 네비게이션
|   |– _grid.scss        # 그리드 시스템
|   |– _header.scss      # 헤더
|   |– _footer.scss      # 푸터
|   |– _sidebar.scss     # 사이드바
|   |– _forms.scss       # 폼
|   …                    # 기타.
|
|– pages/
|   |– _home.scss        # 홈 한정 스타일
|   |– _contact.scss     # 연락처 한정 스타일
|   …                    # 기타.
|
|– themes/
|   |– _theme.scss       # 디폴트 테마
|   |– _admin.scss       # 관리자 테마
|   …                    # 기타.
|
|– utils/
|   |– _variables.scss   # Sass 변수
|   |– _functions.scss   # Sass 함수
|   |– _mixins.scss      # Sass 믹스인
|   |– _helpers.scss     # 클래스 & 플레이스홀더 헬퍼
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   …                    # 기타.
|
|
`– main.scss             # 메인 Sass 파일
```

### BASE 폴더

`base/` 폴더는 프로젝트의 보일러플레이트 코드라고 부를 만한 것을 담습니다. 거기에선, 리셋 파일, 타이포그래피 규칙, 그리고 아마도 자주 사용되는 HTML 요소에 대한 표준 스타일을 정의하는 스타일시트(전 `_base.scss`라고 부릅니다)를 찾을 수 있을 것입니다.

- `_base.scss`
- `_reset.scss`
- `_typography.scss`

### LAYOUT 폴더

`layout/` 폴더에는 사이트나 어플리케이션의 레이아웃에 기여하는 모든 것들이 들어갑니다. 이 폴더는 사이트의 주요 부분(header, footer, navigation, sidebar…), 그리드 시스템 혹은 모든 폼의 스타일을 위한 스타일시트를 가질 수도 있습니다.

- `_grid.scss`
- `_header.scss`
- `_footer.scss`
- `_sidebar.scss`
- `_forms.scss`
- `_navigation.scss`

`layout/` 폴더는 `partials/`라고 불릴 수도 있습니다. 이는 여러분이 선호하는 바에 달렸습니다.

### COMPONENTS 폴더

`components/` 폴더에는 더 작은 컴퍼넌트들이 들어갑니다. `layout/`이 (전반적인 뼈대를 정의하는) 거시적인 폴더임에 반해, `components/`는 위젯에 초점을 둡니다. 이 폴더는 슬라이더, 로더, 위젯, 그리고 기본적으로 이들과 비슷한 것을 비롯해 온갖 구체적인 모듈들을 담습니다. 전체 사이트/어플리케이션이 주로 작은 모듈들로 구성되어야 하므로 `components`에는 대개 많은 파일들이 있습니다.

- `_media.scss`
- `_carousel.scss`
- `_thumbnails.scss`

`components/` 폴더는 선호에 따라 `modules/`라고 불릴 수도 있습니다.

### PAGES 폴더

만약 페이지에 한정된 스타일이 있다면, 그것은 `pages/` 폴더 속, 페이지 이름을 딴 파일에 넣는 것이 좋습니다. 예를 들면, 홈페이지에만 한정된 스타일이 있어 `pages/` 폴더 속 `_home.scss` 파일이 필요해지는 것은 드문 일이 아닙니다.

- `_home.scss`
- `_contact.scss`

이 파일들은 배포 과정에 따라, 산출되는 스타일시트에서 다른 파일과 병합되는 것을 피하기 위해 별도로 호출될 수 있습니다. 이것은 여러분이 결정할 문제입니다.

### THEMES 폴더

큰 사이트와 어플리케이션에서 여러 다른 테마들을 갖는 것은 흔히 있는 일입니다. 물론 테마를 다루는 다른 방법들도 있지만, 개인적으로는 `themes/` 폴더에 전부 모아두는 것을 좋아합니다.

- `_theme.scss`
- `_admin.scss`

이것은 프로젝트에 달려있는 것으로 많은 프로젝트에서는 존재할지 않을 가능성이 큽니다.

### UTILS 폴더

`utils/` 폴더는 프로젝트에서 사용되는 모든 Sass 도구와 헬퍼를 모읍니다. 모든 전역 변수, 함수, 믹스인, 플레이스홀더는 여기로 들어가야 합니다.

이 폴더에 대한 경험적 법칙은 그 자체만으로는 컴파일되었을 때 한 줄의 CSS도 산출하지 않아야 한다는 것입니다. 이것은 그저 Sass 헬퍼일 뿐입니다.

- `_variables.scss`
- `_mixins.scss`
- `_functions.scss`
- `_placeholders.scss` (frequently named `_helpers.scss`)

`utils/` 폴더는 선호에 따라 `helpers/`, `sass-helpers/` 혹은 `sass-utils/`로 불릴 수도 있습니다.

### VENDORS 폴더

그리고 마지막으로 잊지 말아야 할 것으로, 대부분의 프로젝트는 Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered 등의 외부 라이브러리와 프레임워크에서 나오는 모든 CSS 파일을 담고 있는 `vendors/` 폴더를 가집니다. 이들을 같은 폴더에다 치워두는 것은 “저기요, 이건 내가 한 게 아닙니다. 내 코드가 아니고, 나는 책임이 없습니다”라고 말하는 좋은 방법입니다.

- `_normalize.scss`
- `_bootstrap.scss`
- `_jquery-ui.scss`
- `_select2.scss`

만약 어느 벤더의 한 부분을 덮어써야 한다면, 덮어쓰는 벤더의 이름을 그대로 딴 파일들을 담는 여덟 번째 폴더를 만드는 것을 추천합니다.

예를 들면, `vendors-extensions/_boostrap.scss`는 Bootstrap의 기본 CSS 일부를 재선언하는 모든 CSS 규칙을 담고 있는 파일입니다. 이는 벤더 파일 자체를 편집하는 것을 피하기 위함입니다. 그건 대개 좋은 생각이 아니니까요.

### MAIN 파일

(주로 `main.scss`로 이름이 붙는) 메인 파일은 전체 코드베이스에서 언더스코어로 시작하지 않는 유일한 Sass 파일이어야 합니다. 이 파일은 `@import`와 주석 외에는 아무 것도 포함하지 않아야 합니다.

파일들은 각자 자리 잡은 폴더에 따라 아래의 순서대로 하나하나 불러들여집니다:

1. `vendors/`
2. `utils/`
3. `base/`
4. `layout/`
5. `components/`
6. `pages/`
7. `themes/`

가독성을 유지하기 위해, 메인 파일은 이 가이드라인을 준수해야 합니다:

- `@import` 당 파일 하나;
- 한 줄에 하나의 `@import`;
- 같은 폴더로부터의 두 import 사이는 새 줄로 띄우지 않는다;
- 한 폴더로부터의 마지막 import 다음에는 새 줄 하나로 간격을 둔다.
- 파일 확장자와 앞에 붙는 언더스코어는 생략한다.