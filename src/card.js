
export default function Card(props){
    var rate = props.item.rating;
    var rrate = 5 - props.item.rating;
    let addi = function(){
            props.add(props.item);
        }
    return <>
        <div className="col-lg-4 col-md-6 margin">
            <div className="card h-100">
                <a href="#"> 
                    <img className="card-img-top" src={props.item.img}/>
                </a>
                <div className="card-body">
                    <h4 className="card-title">{props.item.product_name}</h4>
                    <h5> ${props.item.product_price}</h5>
                    <p className="card-text">{props.item.product_description}
                    </p>

                </div> 
                <div className="card-footer">
                    <small>
                        {
                            [...Array(rate)].map(()=>{
                                return <i className="bi bi-star-fill"></i>
                            })                            
                        }
                        {
                            [...Array(rrate)].map(()=>{
                                return <i className="bi bi-star"></i>
                            })
                        }
                    </small>
                    <span className="right"><button id={props.item.id} className="btn btn-dark" onClick={addi} disabled={props.item.state}><i className="fa fa-plus" aria-hidden="true"></i></button></span>
                </div>
            </div>
        </div>
    </>
}