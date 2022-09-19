import "./StartPoolForm.scss";
import MatchInfo from "../MatchInfo";
import team1 from "../../img/fb1.svg";
import team2 from "../../img/fb2.svg";
import { Row, Col, Container } from "react-bootstrap";
import question from "./Question";
import FormItem from "./FormItem";
function StartPoolForm({ info }) {
 
  
  return (
    <div className="start-pool-form">
      <MatchInfo info={info}></MatchInfo>
      <div className="start-pool-body">
        <Row className='justify-content-center'>
          <Col xl={6}>
            {question[0].items.map((item, index) => {
              return <FormItem item={item}></FormItem>;
            })}
          </Col>
          <Col xl={6}>
            {question[1].items.map((item, index) => {
              return <FormItem item={item}></FormItem>;
            })}
            <div className="approve-btn">Approve Token</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default StartPoolForm;
