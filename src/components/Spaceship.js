// Code The Spaceship Component Here
export default class Spaceship extends React.Component{
  render(){
    return(
        <div>
          <p>{name}</p>
          <p>{speed}</p>
          <p>{hasRockets}</p>
          <p>{colors}</p>
        </div>
      )
  }
}


Spaceship.defaultProps = {
  speed: 'slow'
  hasRockets : 'false'
  colors : ['black', 'red']
};


// ReactDOM.render(
//   <Spaceship 
//     name ="Mad Max: Fury Road"
//     speed ="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
//     hasRockets ={madMaxGenres}
//     colors ="Mad Max: Fury Road"
//   />,
//   document.getElementById('root')
// );