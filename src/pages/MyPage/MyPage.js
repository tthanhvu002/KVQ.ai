import "./MyPage.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Filter from "../../components/Filter";
function MyPage() {
  return (
    <div className="my-page wrapper">
      <Header></Header>
      <div>
        <div className="d-flex content-container">
          <Sidebar></Sidebar>
          <Filter></Filter>
          <div className="content ">
            <p>Create or change your user name:</p>
            <div className="input-wrap">
                <input type="text" />
                <div className="create-btn">
                    Create
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
