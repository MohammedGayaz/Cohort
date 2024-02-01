export function Card({user}){
    return <div style={style.card}>
        <h1>{user.name}</h1>
        <h3>{user.description}</h3>
        <h3>Intrests</h3>
        <ul>
            {user.interests.map((item, index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
        {Object.keys(user.socials).map((key)=>{
            return <button style={style.button}>
                {key}
                {console.log(user.socials[key])}
                <a href={user.socials[key]}></a>
            </button>
        })}
    </div>
}

const style ={
    card:{
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      padding: "16px",
      textAlign: "left",
      margin: 'auto',
      maxWidth: "400px",
    },
    button: {
        padding: "10px",
        margin: "10px",
    }
  }