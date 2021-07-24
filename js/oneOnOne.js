function changeSort2() {
    let sort1 = document.querySelector('.sort1');
    let sort2 = document.querySelector('.sort2');
    let sort1Option;
    sort1Option = sort1.options[sort1.selectedIndex].innerText;

    let subOptions = {
        customerContact: ['칭찬하기', '개선하기'],
        app: [ 'Fast-Sub_주문/결제', 'Home-Sub_주문/결제', 'Subcard', '포인트', 'e-Gift', '기타'],
        store: ['가맹개설 신청']
    }
    
    let subOption=0;
    document.getElementsByClassName('form_select')[2].style.display = 'inline-block';
    switch (sort1Option) {
        case '고객문의':
            subOption = subOptions.customerContact;
            break;
        case '앱 관련 문의':
            subOption = subOptions.app;
            break;
        case '가맹 개설 문의':
            subOption = subOptions.store;
            break;
    }
                
    let option;
    if(subOption!=0){
        sort2.options.length=1;
        for (let i = 0; i < subOption.length; i++) {
            option = document.createElement('option');
            option.innerText = subOption[i];
            sort2.append(option);
        }
    }
    switch(sort1Option){
        case "메뉴":
            document.getElementsByClassName('form_select')[2].style.display = 'none';
        case "고객문의":
            document.getElementsByClassName('region1')[0].style.display='';
            break;
                
        case "마케팅 제휴/제안":
            document.getElementsByClassName('form_select')[2].style.display = 'none';
        default:
            document.getElementsByClassName('region1')[0].style.display='none';
    }
}


function changeRegion(){
    let region1_sort = document.querySelector('.region1_sort');
    let region2_sort = document.querySelector('.region2_sort');
    let region1Option;
    region1Option = region1_sort.options[region1_sort.selectedIndex].innerText;

    let subOptions = {
        gyeonggi: ['고양원당', '개선하기'],
        app: [ 'Fast-Sub_주문/결제', 'Home-Sub_주문/결제', 'Subcard', '포인트', 'e-Gift', '기타'],
        store: ['가맹개설 신청']
    }
    
    let subOption=0;
    document.getElementsByClassName('form_select')[2].style.display = 'inline-block';
    switch (region1Option) {
        case '경기도':
            subOption = subOptions.gyeonggi;
            break;
        case '앱 관련 문의':
            subOption = subOptions.app;
            break;
        case '가맹 개설 문의':
            subOption = subOptions.store;
            break;
    }
                
    let option;
    if(subOption!=0){
        region2_sort.options.length=1;
        for (let i = 0; i < subOption.length; i++) {
            option = document.createElement('option');
            option.innerText = subOption[i];
            region2_sort.append(option);
        }
    }
}