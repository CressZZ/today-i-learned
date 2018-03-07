console.log('hello d3!!')
d3.select(document.body)
    .append('svg')
    .attr('id', 'first')
    .attr('width', 150)
    .attr('height', 100)
    .style('position', 'absolute')
    .style('top', '350px')
    .style('left', '100px')
// 크롬 브라우저 개발자 도구창에서 <svg>모습을 살펴보세요
d3.select('#first')
.append('rect')
.attr('x', '10')
.attr('y', 10)
.attr('width', 100)
.attr('height', 50)
.attr('stroke-width', 5)
.attr('stroke', 'red')
.attr('fill', 'blue')
.attr('rx', 5)
.attr('rx', 5)

const el = document.querySelector('em');
console.log('nodeName: ', el.nodeName);

const d3Node = d3.select('em');
console.log('nodeName: ', d3Node);

const groups = d3Node._groups[0];
console.log('nodeName: ', groups[0].nodeName);

const parents = d3Node._parents[0];
console.log('nodeName: ', parents.nodeName);

// selectAll()
const el2 = document.querySelectorAll('em');

console.log('el1 nodeName: ', el2[0].nodeName, el2[0].innerHTML);
console.log('el2 nodeName: ', el2[1].nodeName, el2[1].innerHTML);


const d3Node2 = d3.selectAll('em');
console.log('nodeName: ', d3Node2);

const groups2 = d3Node2._groups[0];
console.log('nodeName: ', groups2[0].nodeName);

const parents2 = d3Node2._parents[0];
console.log('nodeName: ', parents2.nodeName);

//rect
const rect = d3.selectAll('rect')
console.log('rect.length: ', rect._groups.length)


//selectAll()
const d3Node3 = d3.selectAll('ul').select('li');
console.log('d3Node3', d3Node3);

const groups3 = d3Node3._groups[0]
console.log(groups3);

// d3.selectAll('ul').select(function(){
//     console.log(
//         this.firstElementChild.textContent
//     )
// })

//selection
const doc = d3.selection();
console.log('doc', doc);
console.log(doc._groups[0][0].nodeName);

// root element에 임의 적으로 prototype을 준다
d3.selection.prototype.changeText = function(text){
    this.text(text)
}

// d3.selectAll('li')
//     .changeText('텍스트 수정')




// filter
const el3 = d3.selection().filter(function(d,i){
    if(this.className == 'second'){
        return this;
    }
})
console.log('el3', el3);

console.log(
    'el3._groups',el3._groups[0]
)



const obj = d3.select('circle');
obj.attr('cx', 100)
    .attr('cy', 70)
    .attr('r', 50)
    .attr('stroke', 'blue')
    .attr('fill', 'lime')
obj.attr('stroke-width', function(){
    return 5;
})

const result = obj.attr('cx');
console.log(result);
obj.attr('stroke-width', function(){
    return null;
})

// property
const objChecked = d3.select('#choice')
const objUl = d3.selectAll('ul')
const objLi = objUl.select('li')


objChecked.property('checked', true)

objChecked.property('checked', function(){
    return true
})

console.log('objChecked', objChecked);
console.log('objUl', objUl);
console.log('objLi', objLi);

console.log('objChecked._groups[0][0].checked', objChecked._groups[0][0].checked);

// insert()
// objUl.insert('li').text('2번')
// objUl.insert(function(){
//     let el = 
//     document.createElement('li');
//     el.textContent = '3번';
//     return el;
// })

// objUl.insert('li', ':first-child')
    // .text('4번')


// const objSvgDoubleTriangle = d3.select('#idsvg2');

// console.log('objSvgDoubleTriangle', objSvgDoubleTriangle);
// objSvgDoubleTriangle
// .append('g')
// .append('path')
// .attr()

// data()
const textData = [10, 20];

d3.selectAll('#dataTest li')
.data(textData)
.text(function(d){
    return d;
})

console.log('d3Node2.selectAll("li")', d3.selectAll('li'));

// enter()
const circleData = [10,20,30];
// let acumY = 0;

const onjEnterTest = 
d3.select('#svgEnterTest')
.selectAll('circle')
.data(circleData)

const enterObj = onjEnterTest.enter()
let acumY = 0;
enterObj.append('circle')
.attr('cx', 100).attr('fill', 'blue')
.attr('cy', function(d, i){
    acumY = acumY + d;
    if (i > 0){
        acumY = acumY + circleData[i-1];
    };
    return acumY;
})
.attr("r", function(d, i){return d;})

// 코딩시간

const rectData = [40,50,60];
// let acumY = 0;

const onjEnterTest2 = 
d3.select('#svgEnterTest2')
.selectAll('rect')
.data(rectData)

const enterObj2 = onjEnterTest2.enter()
let width = 0;
let positionX = 0;
let positionY = 0;
enterObj2.append('rect')
.attr('fill', 'green')
.attr('stroke', 'blue')
.attr('width', function(d, i){
    width = d; 
    return width;
})
.attr('height', function(d, i){
    height = d; 
    return height;
})
.attr('x', function(d, i){
    if(rectData[i-1]){
        positionX += rectData[i-1];
    }
    return positionX
})
.attr('y', function(d, i){
    if(rectData[i-1]){
        positionY += (rectData[i-1]/2);
    }
    return positionY
})

// createSVG

const createObj = createSVG('object1')

function createSVG(id){
    return d3.select(document.body)
        .append('svg')
        .attr('id', id)
};

drawBar(createObj);

function drawBar(object){
    const salesData = [950, 550, 450, 350, 250, 150, 180, 250, 350, 450, 550, 850]
    const maxNumber = Math.max.apply(null, salesData); 
    const minNumber = Math.min.apply(null, salesData); 
    
    const barWidth = 600 / salesData.length - 20;
    const posList = [];
    const objs = 
        object.append('g')
            .attr('class', 'bar')
            .attr('transform', 'translate(50, 20)')
            .selectAll('rect')
            .data(salesData)
            .enter();
    
    objs.append('rect')
        .attr('width', barWidth)
        .attr('fill', function(d, i){
            let redColor;

            redColor = Math.round((1-(d-minNumber)/(maxNumber - minNumber))*255)
            return `rgb(255,${redColor},${redColor})`
        })
        .attr('height', function(d, i){
            posList.push(Math.round(400*d/1000))
            return posList[i]
        })
        .attr('x', function(d,i){
            return (barWidth * i) + (20 * i);
        })
        .attr('y', function(d, i){
            return 400 - posList[i];
        })
}

const createObj2 = createSVG('object2')
drawBar(createObj2);


// d3.line
drawXYLine(createObj2);
function drawXYLine(object){
    const axisValue = [
        {x: 50, y: 20},
        {x: 50, y: 420},
        {x: 650, y: 420},
    ];
    const lineObj = d3.line()
                .x(function(d){return d.x;})
                .y(function(d){return d.y;});
    object.append('g')
        .attr('class', 'axis')
        .append('path')
        .attr('d', lineObj(axisValue));
}

//scaleLinear
drawYAxis(createObj2);
function drawYAxis(object){
    const yScale = d3.scaleLinear()
                        .domain([0, 1000])
                        .range([400,0])
    const yAxis = d3.axisLeft(yScale)
    object.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(50,20)')
        .call(yAxis)
}

//scaleBand
drawXAxis(createObj2);
function drawXAxis(object){
    const month = [1,2,3,4,5,6,7,8,9,10,11,12]
    const xScale = d3.scaleBand()
                        .domain(month)
                        .range([0,600])
    const xAxis = d3.axisBottom(xScale);
    object.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(50,420)')
    .call(xAxis)
}

// line 차트 생성

// 파이 차트 만들기
