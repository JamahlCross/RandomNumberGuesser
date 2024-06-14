function numberQuiz(){

    const minNum = 1
    const maxNum = 100
    const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

    let attemps = 0
    let guess
    let running = true

    while (running){
        
        guess = window.prompt(`${minNum} から ${maxNum} の間で数字を当ててみよう `)
        guess = Number(guess)
        
        if(isNaN(guess)){
            window.alert("数字を入れてください")
        } else if (guess < minNum || guess > maxNum ){
            window.alert("1から100の間です")
        } else {
            attemps++
            if(guess < answer){
                window.alert("もっと高い！もう一度")
            } else if (guess > answer){
                window.alert("もっと低い！もう一度")
            } else {
                window.alert(`正解！ 答えは${answer}でした。. 当てるのに${attemps}回かかりましたね。`)
                running = false
            }
        }
        
    }
}