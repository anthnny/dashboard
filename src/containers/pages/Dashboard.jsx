import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"

function Dashboard(){
    return(
        <Layout>
            Proximamente
        </Layout>
    )
}

const mapStateToProps=state=>({

})


export default connect(mapStateToProps,{

}) (Dashboard)