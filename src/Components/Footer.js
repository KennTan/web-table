import React from "react";



export default class Footer extends React.Component {
  render() {

		const Tips = () =>
		<div style={{ textAlign: "center", color: "grey"}}>
			<em>Tip: Cell filtering is case-sensitive!</em>
		</div>;

    return (
      <footer>
				<Tips />
        <div class="row">
          <div class="col-lg-12">
            <center>Copyright &copy; Gowild</center>
          </div>
        </div>
      </footer>
    );
  }
}