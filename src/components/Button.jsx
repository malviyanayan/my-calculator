import styles from './button.module.css'


export default function Button({item}){
    const greet = (name) => {
        if(name === 'C'){
            document.getElementById('display').value = '';
        }else {
            if(name === '='){
                let expression = document.getElementById('display').value;
                document.getElementById('display').value = eval(expression);
                return ;
            }
            document.getElementById('display').value += name;
        }

    };
    
    return(
        <button onClick={() => greet(item)} style={item === '=' ? {width:'66%'} : {width:'32%'}} className={`fs-5 border border-dark shadow-sm rounded ${styles.myButton}`}>{item}</button>
        
    )
}