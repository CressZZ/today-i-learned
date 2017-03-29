# 자료구조 4-2 자료구조

# 2 기본자료구조

## 2.1 선형리스트

- 선형리스트 : 순서적으로 나열된 유한개의 원소(element)들의 모임
- 연산
  - create, read, wirte, search, insert, delete, destroy, equal, split, splice, size
- 예) 조선왕의 순서 (insert나, delete가 안된다.) :**순서가** 있어야 된다.

### 2.1.1 선형 리스트의 구현

- **1차원 배열 (one-dimensional arrays)**

: 다음 요소가 바로 전 요소 다음에 있다.

- **연결리스트 (linked lists)**

:다음요소가 어디있는지 알려 줘야 한다.

### 2.1.2 배열의 특징

- 순차 매핑 (sequential mapping) - 논리 주소상
- 임의 접근 가능(random access) (어떤 곳에 있거나, 접근하는 시간이 동일하다.)

: 일단 메모리에 올라오면...

- 원소의 삽입이나 삭제시 비효율적 (원소의 이동이 필요)

: 삽입이나 삭제가 많으면 보통 연결 리스트를 사용한다.

- C언어에서의 표현
- 다차원 배열 - 2차원 배열이라도 1차원 주소가 된다. (메모리라는 것은 1차원이기 때문에)

: `A[j][k]`의 주소 = `B + j*n + k` ('B' = base adress) -**행우선 일 경우의 예시이다.**

: `A[i][j][k]`의 주소 = `B + i*m*n + j*n +k`  - **행우선이 아닌 언어도 존재 하긴 한다**

### 2.1.3 배열의 응용

- 다항식을 표현할 수 있다.

- 다항식은 항들의 합이므로, 이를 표현하기 위해서는 적어도 최대 차수 n값과 각항의 계수와 차수 (degree)를 나타내야함.

- 각 차수(n), 계수, 차수 등을 저장하기 위한 저장 공간, 즉, 상수(n), 배열(차수a(i)) 등이 필요하다.

- 다항식 저장 예시

  - 예시

  ![스크린샷 2017-02-14 오전 8.32.37](https://github.com/CressZZ/today-i-learned/blob/master/02_My_Study/03_Data-structure_sanghoLee/asset/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-02-14%20%EC%98%A4%EC%A0%84%208.32.37.png?raw=true)

  - 단점을 보완한거: 3개의 공간만 필요하지만, 한 배열에 2개의 단위 공간이 필요하다. 즉, 6개의 공간이 필요.

![스크린샷 2017-02-14 오전 8.34.59](https://github.com/CressZZ/today-i-learned/blob/master/02_My_Study/03_Data-structure_sanghoLee/asset/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-02-14%20%EC%98%A4%EC%A0%84%208.34.59.png?raw=true)

- 다항식 (poly) 의 zero term이 많으면 두번째 예시가, 별로 없으면 첫번째 예시가 좋다.
- 하나의 배열에 여러 다항식도 운영이 가능 하다.

![스크린샷 2017-02-14 오전 8.40.18](https://github.com/CressZZ/today-i-learned/blob/master/02_My_Study/03_Data-structure_sanghoLee/asset/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-02-14%20%EC%98%A4%EC%A0%84%208.40.18.png)

- Data Structure유형에 따라서 연산 방법이 다르다.

### 2.1.4 stack 과 queue

- 삽입과 제거의 위치가 제한적인 특수한 선형 리스트
  - 함수에서의 복귀 주소 (return address): 스택에 저장
  - cpu 스케쥴링: 작업 큐

  ### 2.1.5 stack

- 스택의 상단에서만 삽입과 제거가 이루어 진다. (순서대로 처리되는게 아니다.)
- push, pop, create, destroy연산
- LIFO (Last-In-first-Out)
- 연산 구현시 stack_empty, stacj_full 조건 체크 필요

![스크린샷 2017-02-14 오전 8.53.58](https://github.com/CressZZ/today-i-learned/blob/master/02_My_Study/03_Data-structure_sanghoLee/asset/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-02-14%20%EC%98%A4%EC%A0%84%208.40.18.png?raw=true)

- **삽입할때는 stack이 full인지 확인!**
- **제거할때는 stackt이 비어 있는지 확인!**

### 2.1.6 큐

- 각 한쪽 끝에서 삽입제거 (FIFO-First-In-first-Out)

: 삽입되는 곳과 제거되는 곳이 다르다. (삽입이 rear, 제거가 front)

- enqueue, dequeue, create, destroy등의 연산.
- 스케쥴링 (CPU, Dist scheduling)
- 버퍼역할 (buffer)=창고역할=io buffer=producer, consumer사이의 완충 역할.+즉, 저장해놓는 역할 (큐에 저장한다.)

ex) 만약 타자가 엄청 빠른 사람이 있으면 운영체제는 그사람의 타자를 `큐`에 저장해놨다가 쓴다.

![스크린샷 2017-02-14 오전 9.00.15](https://github.com/CressZZ/today-i-learned/blob/master/02_My_Study/03_Data-structure_sanghoLee/asset/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-02-14%20%EC%98%A4%EC%A0%84%209.00.15.png?raw=true)

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
