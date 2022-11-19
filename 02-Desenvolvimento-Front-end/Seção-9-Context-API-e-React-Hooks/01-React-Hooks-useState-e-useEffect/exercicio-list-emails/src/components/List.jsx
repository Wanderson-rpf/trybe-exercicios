import PropTypes from 'prop-types';
import { read, unread } from '../constants';
import readIcon from '../img/icon_read.svg'
import unreadIcon from '../img/icon_unread.svg'

export default function List({ messages, setMessageStatus }) {
  return (
    <ul>
      {messages.map((message) => {
      const messageClass = message.status === read
      ? 'message-read'
      : 'message-unread';
    return (
      <li key={message.id}>
        <p className={messageClass}>{message.title}</p>
        <div>
          <button
            onClick={() => setMessageStatus(message.id, read)}
          >
            <img src={readIcon} alt="" />
          </button>
          <button
            onClick={() => setMessageStatus(message.id, unread)}
          >
            <img src={unreadIcon} alt="" />
          </button>
        </div>
      </li>  
    )
      })}
    </ul>
  );
};

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
  setMessageStatus: PropTypes.func.isRequired,
};