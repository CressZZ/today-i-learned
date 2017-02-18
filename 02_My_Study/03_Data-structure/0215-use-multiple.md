# 자료구조 5_1

#### 2.1.6.1 큐 구현

- 마치 배열의 처음과 끝을 맞물린 것처럼 가정함.  -> `환형 큐`, `환형버퍼`
- 일반적배열을 구현할 때 환형으로 (둥그런) 구현한다. 
- 큐에서의 삽입 (enqueue)과 제거(dequeue)

```c
void enqueue (int front, int *rear, char x){
  if (front == (*rear+1) % MAX_QSIZE){
    queue_full(); return;
  }
  *rear = (*rear+1) % MAX_QSIZE;
  queue[*rear] = x;
}

char dequeue (int *front, int rear){
  if (*front == rear) return queue_empty();
  *front = (*front+1)%MAX_QSIZE;
  return queue[*front];
}
```

### 2.1.7 다중 스텍

- 양쪽에 스택 두개를 두고, 서로 ㄷ른 방향으로 data를 쌓아 간다.
- 두 스택의 type이 같아야 하낟.(파이선 처럼 배열에 두개의 타입이 들어가는 경우는 해당안됨)
- 하나의 스텍은 공간을 많이 쓰고, 하나는 적게 쓸때 효율적이다. 

![스크린샷 2017-02-15 오전 8.55.46](/Users/cress00/Documents/programming/fastcampus-master/project/study/My_Study/data-structure/asset/스크린샷 2017-02-15 오전 8.55.46.png)

![스크린샷 2017-02-15 오전 8.57.38](/Users/cress00/Documents/programming/fastcampus-master/project/study/My_Study/data-structure/asset/스크린샷 2017-02-15 오전 8.57.38.png)

### 2.1.3 

- Memory Address순서
  1. 코드
  2. 변수
     1. 전역변수, 지역변수 (초기화가 된 부분)
     2. 변수 (초기화가 안된 부분)
  3. heap (변수를 dynamic하게 쓰고 반환하는 공간)
  4. stack 함수 (호출하면 생겼다가, 반환하면 없어진다. )



## 2.2 스택의 활용

- memory address
- 연산식의 괄호

### 2.2.1 연산식의 계산

- 대부분의 컴파일러에서는 `후위 표기법`을 많이 사용한다. 
  - 1회 스캔
  - 괄호 불필요
  - 스택을 사용하여 계산 

### 2.2.2 연산 예) AB+CD-* 의 계산과정 스택!!

![스크린샷 2017-02-16 오전 8.20.55](/Users/cress00/Documents/programming/fastcampus-master/project/study/My_Study/data-structure/asset/스크린샷 2017-02-16 오전 8.20.55.png)

- C, D 뺄때는 나중에 pop한 C에서 처음에 pop한 D를 빼준다. 

![스크린샷 2017-02-16 오전 8.54.10](/Users/cress00/Documents/programming/fastcampus-master/project/study/My_Study/data-structure/asset/스크린샷 2017-02-16 오전 8.54.10.png)



- 위의 후위 표기의 계산을 간단하게 하기 위한 가정 (assumption)

  - 후위 표기식이 배열 expression에 저장 되어 있다. 
  - 식의 마지막은 ';'이다. 
  - 피연산자는 하나의 숫자 `문자`이다. 
  - 연산자는 +, - ,*, % 로만 구성된다. 
  - 함수 get_token()은 expression에서 하나의 문자를 반환하고, 인덱스 값을 1 증가 시킨다. 
  - 함수 is_digi() 는 주어진 문자가 피연산자(숫자 하나)이면 true, 그렇지 않으면 false를 반환한다. 

  ​