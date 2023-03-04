import Table from 'react-bootstrap/Table';
import "../../App.css";
export default function ChildComponent(props){

    const arr = ["...","KATIHAR", "MOTIHARI", "MUZAFFARPUR", "MUNGER", "NALANDA", "PATNA", "ROHTAS", "SUPAUL"];
    function  handleHeading(num){
      if(num === 1){
        return  <p className='childheading'>{arr[(props.cnum ===0)?0:props.cnum-8+1]} 
        <span className='heading-number'></span>
        </p>
      }
      else if(num === 2){
        return  <p className='childheading'>{arr[(props.cnum ===0)?0:props.cnum-8+1]} 
        <span className='heading-number'></span>
        </p>
      }
      else if(num === 3){
        return <p className='childheading-muzz'>{arr[(props.cnum ===0)?0:props.cnum-8+1]} 
        <span className='heading-number-muzz'></span>
        </p>
      }
      else if(num === 4){
        return  <p className='childheading'>{arr[(props.cnum ===0)?0:props.cnum-8+1]} 
        <span className='heading-number'></span>
        </p>
      }
      else if(num === 5){
        return  <p className='childheading'>{arr[(props.cnum ===0)?0:props.cnum-8+1]} 
        <span className='heading-number'></span>
        </p>
      }
      else if(num === 6){
        return  <p className='childheading'>{arr[(props.cnum ===0)?0:props.cnum-8+1]} 
        <span className='heading-number'></span>
        </p>
      }
      else if(num === 7){
        return  <p className='childheading'>{arr[(props.cnum ===0)?0:props.cnum-8+1]} 
        <span className='heading-number'></span>
        </p>
      }
      else {
        return  <p className='childheading'>{arr[(props.cnum ===0)?0:props.cnum-8+1]} 
        <span className='heading-number'></span>
        </p>
      }
   
    }
    return (
        <>
        {handleHeading((props.cnum ===0)?0:props.cnum-8+1)}
        
        <div className='topcont'>
        <Table striped bordered hover className='childtable'>
        <thead>
          <tr>
            <th className='techcolor'>TECH</th>
            <th className='wkscolor'>WKS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>{props.data[props.cnum][0][0]} %</td>
            <td>{props.data[props.cnum][0][1]} %</td>
           
          </tr>
          <tr>
            
            <td>{props.data[props.cnum][1][0]} %</td>
            <td>{props.data[props.cnum][1][1]} %</td>
        
          </tr>
          <tr>
            <td>{props.data[props.cnum][2][0]} %</td>
            <td>{props.data[props.cnum][2][1]} %</td>
          </tr>
        </tbody>
      </Table>
      </div>
      </>

    );
  };