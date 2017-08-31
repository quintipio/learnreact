import React from 'react';
import '../../css/Products/ProductRow.css';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
        this.destroy = this.destroy.bind(this);
        this.edit = this.edit.bind(this);
    }

    destroy() {
        this.props.onDestroy(this.props.product.id);
    }

    edit() {
        this.props.onEdit(this.props.product.id);
    }

    render() {
        var name = this.props.product.stocked ? this.props.product.name: <span style={{color:'red'}}>{this.props.product.name}</span>
        return (
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    <button onClick={this.destroy} >x</button>
                </td>
                <td>
                    <button onClick={this.edit} >Modifier</button>
                </td>
            </tr>
        );
    }
}


export default ProductRow;