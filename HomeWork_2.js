async function sleep(p) {
    console.log('Мы работаем над проблемой');
    setTimeout(() => console.log('Ура!!!'), p);
}

async function others() {
    console.log('Произошла непридвиденная ошибка');
    await sleep(p = 5000);
    console.log('Надо немного подождать') ;    
}