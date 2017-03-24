# 2017-03-23 회의 준비

"""
변경이유
    하나의 html파일에서 API요청을 한번만 한다고 생각했는데 어제 오늘 공부해보니 한번에 여러개도 가능한 것 같음.
    분리해서 구성하는게 나을 듯 보임. 예를 들면 유저정보에서 너무 많은 정보를 한번에 받는 것이 아니라,
    [기본 유저 정보], [위시리스트], [수업신청내역], [진행중인 수업], [내가 학생인 수업], [내가 튜터인 수업] 등
    화면에서 보여주고자 하는 목적에 맞게 뿌려주는게 필요하다고 생각함.
변경사항
    1. 유저정보에서의 수업리스트 보여주는 부분
    --> 위시리스트나 진행중인 수업같이 수업리스트의 간략한 형태가 나오는 것 따로 뺌
    2. 수업정보에서 리뷰와 QnA 따로 뻄
    --> QnA와 리뷰가 같이 있으니까 하나의 아이템이 너무 심하게 길어지는 것 같음.
    3. 리뷰에서 평점 추가
회의에 참고할 내용
    1. 현재까지 작성한 내용은 주로 GET에 대한 부분이므로 POST요청 -
    (유저생성, 수업생성, 수업신청, 각종인증자료 전송) - 은 따로 API로 만들 것이라고 언급
    --> 특별히 추가된 정보를 POST요청으로 보내는 것이 아니라 현재 탈잉 서비스 기준으로.
"""

# 유저정보
{
	"id": 71,
	"user_id": "codemaster",
	"username": "이대호",
	"nickname": "코딩은첨이지",
	"email": "daeholee@gmail.com",
	"gender": "male",
	"profile_img": {
		"url": "http://localhost:8000/media/post/lewis_profile.png",
		"size": ,
		"thumbnails": [
			{
				"url": "http://localhost:8000/media/post/lewis_profile_thumb.png",
			}
		]
	},
	"phone_num": "010-1234-5678",
	"full_address": "서울시 강남구 강남대로 78-2",
	"city": "서울",
	"is_tutor": 0,
	"is_staff": 0,
	"joined_date": "2014-06-12 09:40",
	"last_login_at": "2017-03-04 17:01",
}

# 위시리스트, 수업리스트(전체신청내역, 진행중, 튜터, 학생)
{
	"user_id": 15,
	"username": "박찬호",
	"count": 5,
	"next": "http://127.0.0.1:8000/api/post/?cursor=cD0yMDE3LTAzLTIyKzEzJTNBMjMlM0E0OC42MDU1MzYlMkIwMCUzQTAw",
	"previous": null,
	"results": [
		{
			"id": 3,
			"tutor": {
				"id": 15,
				"name": "최옹곤",
				"nickname": "메이킹",
				"profile_img": "http://localhost:8000/media/post/user_15.png",
			},
			"class":{
				"title": "프라모델 만들기",
				"region": "신촌",
				"type": "1:1수업",
				"cover_img": "http://localhost:8000/media/post/pra_cover.png",
				"rate": {
					"count": 19,
					"average": 5,
				}
				"created_date": "2017-01-25 18:26",
				"selling": 1,
				"count_of_students": 7
			}
		},
		{
			"id": 1,
			"tutor": {
				"id": 18,
				"name": "이동혁",
				"nickname": "코드메쓰",
				"profile_img": "http://localhost:8000/media/post/user_18.png",
			},
			"class":{
				"title": "파이썬뽀개기",
				"region": "신사, 논현",
				"type": "그룹수업",
				"cover_img": "http://localhost:8000/media/post/python_cover.png",
				"rate": {
					"count": 11,
					"average": 4.5,
				}
				"created_date": "2017-01-29 20:11",
				"selling": 1,
				"count_of_students": 9
			}
		}
	]
}

# 수업정보
{
	"id": 3,
	"title": "네일아트 마스터",
	"video_link": "https://www.youtube.com/watch?v=ePpPVE-GGJw",
	"price_per_hour": "20,000",
	"hours_per_class": "2시간",
	"classes_per_month": "8",
	"category": "헬스/뷰티",
	"selling": 1,
	"tutor_id": 17,
	"class_type": {
		"type": "그룹수업",
		"min_students": 1,
		"max_students": 4,
	},
	"images": [
		{
			"url":	"http://localhost:8000/media/post/nail_cover1.png",
		},
		{
			"url": "http://localhost:8000/media/post/nail_cover2.png",
		}
	],
	"location":[
		{
			"region": "강남",
			"class_hour": [
				{
					"day": "월",
					"time": [
						"10~12시", "14~16시",
					]
				},
				{
					"day": "화",
					"time": [
						"10~12시",
					]
				},
				{
					"day": "수",
					"time": [
						"10~12시",
					]
				}
			]
			"specific_location": "협의 후 결정",
			"additional_price": "",
		},
		{
			"region": "사당",
			"class_hour": [
				{
					"day": "토",
					"time": [
						"14~16시",
					]
				}
			]
			"specific_location": "협의 후 결정",
			"additional_price": "3만원",
		},
	],
	"comment_on_location": "주로 스터디룸을 빌릴 예정입니다.",
	"message_to_students": "재밌게 해봐요~",
	"students_list": [15, 18, 19, 57, 99, 102],
	"count_of_students": 6,
	"clicks": 82,
	"wish_list_added": 4,
	"tutor_intro": "안녕하세요, 저는 뷰티블로거와 유튜버를 겸한 뷰티 크레에이터입니다. ...",
	"class_intro": "화알못을 구제해주러 왔다.~~ ",
	"curriculum": [
		{
			"content": "오리엔테이션~"
		},
		{
			"content": "프렌치 네일 배우기"
		}
	],
}

# 리뷰
{
    "class_id": 54,
    "class_title": "네일아트 마스터",
    "count": 2,
    "average_rate": 4.5,
	"results": [
		{
			"student_name": "이대호",
			"created_date": "2017-03-04 19:19",
            "content": "재밌는 수업이었습니다.",
            "rate": {
				"curriculum": 4,
				"readiness": 5,
				"timeliness": 5,
				"delivery": 4,
				"friendliness": 4,
			}
		},
        {
			"student_name": "제라드",
			"created_date": "2017-03-02 20:14",
            "content": "꿀수업",
			"rate": {
				"curriculum": 3,
				"readiness": 5,
				"timeliness": 3,
				"delivery": 4,
				"friendliness": 4
			}
		}
	],
}

# QnA
{
    "class_id": 54,
    "class_title": "네일아트 마스터",
    "count": 2,
	"results": [
        {
            "question": {
                "content": "이 수업 들을만한가요?",
                "author": {
                    "name": "이승엽",
                    "profile_img": "",
                },
                "created_time": "2017-03-17 18:44",
            },
            "answer": {
                "content": "이 수업 들을만한가요?",
                "created_time": "2017-03-17 18:51",
            }
        },
        {
            "question": {
                "content": "강남에서만 하나요?",
                "author": {
                    "name": "박지성",
                    "profile_img": "",
                },
                "created_time": "2017-03-18 08:44",
            },
            "answer": {}
        }
    ]
}

# 수업 리스트
{
	"count": 3,
	"next": "",
	"previous": null,
	"results": [
		{
			"id": 1,
			"tutor": {
				"id": 14,
				"name": "최연주",
				"nickname": "네일로",
				"profile_img": "http://localhost:8000/media/post/user_14.png",
			},
			"class":{
				"title": "네일아트 마스터",
				"region": "강남, 사당",
				"type": "그룹수업",
				"cover_img": "http://localhost:8000/media/post/nail_cover2.png",
				"rate": {
					"count": 22,
					"average": 4,
				}
				"created_date": "2017-01-20 17:33",
				"selling": 1,
				"count_of_students": 21
			}
		},
		{
			"id": 3,
			"tutor": {
				"id": 15,
				"name": "최옹곤",
				"nickname": "메이킹",
				"profile_img": "http://localhost:8000/media/post/user_15.png",
			},
			"class":{
				"title": "프라모델 만들기",
				"region": "신촌",
				"type": "1:1수업",
				"cover_img": "http://localhost:8000/media/post/pra_cover.png",
				"rate": {
					"count": 19,
					"average": 5,
				}
				"created_date": "2017-01-25 18:26",
				"selling": 1,
				"count_of_students": 7
			}
		},
		{
			"id": 1,
			"tutor": {
				"id": 18,
				"name": "이동혁",
				"nickname": "코드메쓰",
				"profile_img": "http://localhost:8000/media/post/user_18.png",
			},
			"class":{
				"title": "파이썬뽀개기",
				"region": "신사, 논현",
				"type": "그룹수업",
				"cover_img": "http://localhost:8000/media/post/python_cover.png",
				"rate": {
					"count": 11,
					"average": 4.5,
				}
				"created_date": "2017-01-29 20:11",
				"selling": 1,
				"count_of_students": 9
			}
		}
	]
}
