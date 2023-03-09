
import PropTypes from 'prop-types';
import Page from "../Page";
import Header from "../Header";
import './styles.scss'

const Cgu = ({ isLogged, isConnected, isDisconnected }) => {
    return (
        <Page>
        <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
        <div className="cgu">
            <ul className="cards">
            <li className='cards-card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue placerat urna. Suspendisse rutrum massa vitae ligula euismod, ut sodales dui ultricies. Integer justo orci, luctus vel velit eu, fringilla lacinia felis. Praesent rhoncus sagittis venenatis. Ut id tortor id metus varius cursus. Quisque metus velit, fringilla sed lectus ac, bibendum lacinia nibh. Ut sed luctus tellus. Praesent vel fermentum elit. Sed nec finibus lectus. Nam sit amet augue quis tortor tristique vestibulum vel ac elit. Nam nunc erat, pharetra ac feugiat ac, dictum eu lectus. Nulla non nisi libero. Curabitur risus nisi, tempus id imperdiet nec, posuere a lectus. Morbi et mollis risus. Morbi ut elit pulvinar, placerat enim at, aliquam lacus.</li>

            <li className='cards-card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue placerat urna. Suspendisse rutrum massa vitae ligula euismod, ut sodales dui ultricies. Integer justo orci, luctus vel velit eu, fringilla lacinia felis. Praesent rhoncus sagittis venenatis. Ut id tortor id metus varius cursus. Quisque metus velit, fringilla sed lectus ac, bibendum lacinia nibh. Ut sed luctus tellus. Praesent vel fermentum elit. Sed nec finibus lectus. Nam sit amet augue quis tortor tristique vestibulum vel ac elit. Nam nunc erat, pharetra ac feugiat ac, dictum eu lectus. Nulla non nisi libero. Curabitur risus nisi, tempus id imperdiet nec, posuere a lectus. Morbi et mollis risus. Morbi ut elit pulvinar, placerat enim at, aliquam lacus.</li>

            <li className='cards-card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue placerat urna. Suspendisse rutrum massa vitae ligula euismod, ut sodales dui ultricies. Integer justo orci, luctus vel velit eu, fringilla lacinia felis. Praesent rhoncus sagittis venenatis. Ut id tortor id metus varius cursus. Quisque metus velit, fringilla sed lectus ac, bibendum lacinia nibh. Ut sed luctus tellus. Praesent vel fermentum elit. Sed nec finibus lectus. Nam sit amet augue quis tortor tristique vestibulum vel ac elit. Nam nunc erat, pharetra ac feugiat ac, dictum eu lectus. Nulla non nisi libero. Curabitur risus nisi, tempus id imperdiet nec, posuere a lectus. Morbi et mollis risus. Morbi ut elit pulvinar, placerat enim at, aliquam lacus.</li>

            <li className='cards-card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue placerat urna. Suspendisse rutrum massa vitae ligula euismod, ut sodales dui ultricies. Integer justo orci, luctus vel velit eu, fringilla lacinia felis. Praesent rhoncus sagittis venenatis. Ut id tortor id metus varius cursus. Quisque metus velit, fringilla sed lectus ac, bibendum lacinia nibh. Ut sed luctus tellus. Praesent vel fermentum elit. Sed nec finibus lectus. Nam sit amet augue quis tortor tristique vestibulum vel ac elit. Nam nunc erat, pharetra ac feugiat ac, dictum eu lectus. Nulla non nisi libero. Curabitur risus nisi, tempus id imperdiet nec, posuere a lectus. Morbi et mollis risus. Morbi ut elit pulvinar, placerat enim at, aliquam lacus.</li>

            <li className='cards-card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue placerat urna. Suspendisse rutrum massa vitae ligula euismod, ut sodales dui ultricies. Integer justo orci, luctus vel velit eu, fringilla lacinia felis. Praesent rhoncus sagittis venenatis. Ut id tortor id metus varius cursus. Quisque metus velit, fringilla sed lectus ac, bibendum lacinia nibh. Ut sed luctus tellus. Praesent vel fermentum elit. Sed nec finibus lectus. Nam sit amet augue quis tortor tristique vestibulum vel ac elit. Nam nunc erat, pharetra ac feugiat ac, dictum eu lectus. Nulla non nisi libero. Curabitur risus nisi, tempus id imperdiet nec, posuere a lectus. Morbi et mollis risus. Morbi ut elit pulvinar, placerat enim at, aliquam lacus.</li>

            <li className='cards-card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue placerat urna. Suspendisse rutrum massa vitae ligula euismod, ut sodales dui ultricies. Integer justo orci, luctus vel velit eu, fringilla lacinia felis. Praesent rhoncus sagittis venenatis. Ut id tortor id metus varius cursus. Quisque metus velit, fringilla sed lectus ac, bibendum lacinia nibh. Ut sed luctus tellus. Praesent vel fermentum elit. Sed nec finibus lectus. Nam sit amet augue quis tortor tristique vestibulum vel ac elit. Nam nunc erat, pharetra ac feugiat ac, dictum eu lectus. Nulla non nisi libero. Curabitur risus nisi, tempus id imperdiet nec, posuere a lectus. Morbi et mollis risus. Morbi ut elit pulvinar, placerat enim at, aliquam lacus.</li>

            </ul>
        </div>
        </Page>
    )
};

Cgu.propTypes = {
    isLogged: PropTypes.bool, 
    isConnected: PropTypes.func,
    isDisconnected:PropTypes.func,
   };
export default Cgu;