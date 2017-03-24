# API 1차

```
2017. 3. 21.
고성현, 김영민, 조영나
```

# 유저
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
	"my_class": [],
	"class_list": [
		{
			"pk": 3,
			"title": "네일아트 마스터",
		}
	],
	"wish_list": [
		{
			"pk": 5,
			"title": "수상스키",
		}
	],
}

# 수업
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
	"review": [
		{
			"student_name": "이대호",
			"created_date": "2017-03-04 19:19",
			"rate": {
				"curriculum": 4,
				"readiness": 5,
				"timeliness": 5,
				"delivery": 4,
				"friendliness": 4
			}
		}
	],
	"QnA": [
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
