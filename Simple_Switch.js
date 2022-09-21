$(document).ready(function(){
    let circle = $('.circle');
    circle.click(function(){
        
        
        
        if(circle.css('background-color') == 'rgb(0, 0, 0)'){
            console.log('white')
            circle.css({
                
                background : 'white',
                left : '30px',
                top: '-4px'
            })
            $('button').css({
                background: 'black',
                border: '2px solid rgb(184, 181, 181)',
            })
            $('.parent').css({
                background: 'black',
            })
    }else{
        
                circle.css({
                    
                    background : 'black',
                    left : '-5px',
                    top: '-4px'
                })
                $('button').css({
                    background: 'white',
                    border: '2px solid rgb(184, 181, 181)',
                })
                $('.parent').css({
                    background: 'white',
                })
            
        
        }
        
    })
 })