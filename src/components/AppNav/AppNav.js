import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import navItems from '../../config/Sections.json';
import { Link } from 'react-router-dom';


class AppNav extends Component {

    // const { handleNavClick } = this.props;

    componentDidMount = async () => {
      try {
        const articlesJson = await fetchArticlesBySection(this.props.match.params.sectionID);
        this.setState({ articles: articlesJson });
      } catch (e) {
        console.error('error fetching articles: ', e);
      }
    }

    // componentDidUpdate = async (prevProps) => {
    //   if (this.props.sectionID !== prevProps.sectionID) {
    //     try {
    //       const articlesJson = await fetchArticlesBySection(this.props.match.params.sectionID);
    //       this.setState({ articles: articlesJson });
    //     } catch (e) {
    //       console.error('error fetching articles: ', e);
    //     }
    //   }
    // }

  render() {
    return (
      <Navbar color="light">
        {navItems.map((navItem) =>
          // <a href="#" onClick={ () => handleNavClick( navItem.value )} >
          //   { navItem.label } |
          // </a>
          <Link to={`/sections/${navItem.value}`}>{navItem.label}</Link>
        )}
      </Navbar>
    )
  }
}

export default AppNav;


// Functional solution:
// function AppNav({ handleNavClick }) {
//   return (
//     <Navbar color="light">
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick( navItem.value )} >
//           { navItem.label } |
//         </a>
//       )}
//     </Navbar>
//   );
// }
