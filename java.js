'use strict';
let visitor=prompt('Кто здесь?','')
if (visitor == '' || visitor == null){
    alert('Отменено')
}
else if (visitor=='админ'){
let pass=prompt('Пароль','')
    if (pass=='я главный'){
        alert('Здравтсвуйте!')
    }
    else if(pass == '' || pass == null){
        alert('Отменено')
    }
    else {
        alert('Неверный пароль')
    }
}
else{
        alert('Я вас не знаю!')
    }

<script>
    'use strict';
    let user=prompt('Ваше имя?','Женя')
    let tea=confirm('Чаю не желаешь?') ? 
    alert(`Держи,${user}`): alert(`Как хочешь,${user}`);                                
</script>