
import React from "react";
import {Header} from "./components";
import {Home,Cart} from "./Pages";
import {Route,Routes} from "react-router-dom";


// function App() {
//
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         });
//
//         // fetch('http://localhost:3000/db.json')
//         //     .then((resp) => resp.json())
//         //     .then((json) => {
//         //         setPizzas(json.pizzas);
//         //     })
//     }, [])
//
//   return ;
// }


function App() {

    return (
        <div className="wrapper">
            <Header />
            <div className="content">

                <Routes>
                    <Route path="/" element={<Home />} >

                    </Route>
                    <Route path="/cart"  element={<Cart/>} >

                    </Route>
                </Routes>

            </div>
        </div>
    )
}


export default App;

// const mapStateToProps = state => {
//     return {
//         items: state.pizzas.items
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzas: (items)=> dispatch(setPizzas(items))
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
