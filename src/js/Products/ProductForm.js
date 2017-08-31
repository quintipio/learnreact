import React from 'react';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state= {
            product: {
                name:'',
                category:'',
                price:'0',
                stocked:false
            },
            errors:[]
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: this.props.forEdit
        });
        console.log(this.state.product);
    }

    handleSave(e) {
        if(this.state.product.name) {
            this.props.onSave(this.state.product);

            this.setState({
                product: {
                    name:'',
                    category:'',
                    price:'0',
                    stocked:false
                },
                errors:[]
            });

            e.preventDefault();
        }
        else {
            this.setState((prevState) => {
                let error = prevState.errors;
                error.push("Le champ nom doit être rempli");
                return {error};
            });
            return;
        }
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox'?target.checked:target.value;
        const name = target.name;

        this.setState((prevState) => {
            prevState.product[name] = value;
            return {product:prevState.product};
        });
    }

    render() {
        return (
            <form>
                <h3>Entré un nouveau produits</h3>
                <ul>
                    {
                        this.state.errors.map((error) => (<li style={{color:'red'}}>{error}</li>))
                    }
                </ul>
                <p>
                    <label>
                        Nom
                        <br />
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name} required={true} />
                    </label>
                </p>
                <p>
                    <label>
                        Categorie
                        <br />
                        <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category} />
                    </label>
                </p>
                <p>
                    <label>
                        Prix
                        <br />
                        <input type="text" name="price"  onChange={this.handleChange} value={this.state.product.price} />
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" name="stocked"  onChange={this.handleChange} value={this.state.product.stocked} />
                        En stock?
                    </label>
                </p>
                <input type="submit" value="Sauvegarder" onClick={this.handleSave} />
            </form>
        );
    }
}

export default ProductForm;
