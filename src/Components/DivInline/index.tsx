import { Link } from 'react-router-dom';
import './divinline.scss';

const DivInline = () => {
  return (
    <div id='section-2' className='container divInline-container'>
      <div className='texts'>
        <p><span className='white'>Project started to help new frontend developers who want to improve</span> their own skills building projects</p>
        <p><span className="white">Everything here is for free, but i really love creating cool stuff like this</span>, if you like it, please follow me on my social medias for more ideas</p>
        <div className='icons'>
          <a href="https://www.linkedin.com/in/devlucaspro/"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
              <path d="M30.6133 15.9941C33.6082 15.9941 36.4805 17.1839 38.5982 19.3016C40.716 21.4194 41.9057 24.2916 41.9057 27.2866V40.4611H34.3774V27.2866C34.3774 26.2883 33.9808 25.3309 33.2749 24.6249C32.569 23.919 31.6116 23.5224 30.6133 23.5224C29.6149 23.5224 28.6575 23.919 27.9516 24.6249C27.2457 25.3309 26.8491 26.2883 26.8491 27.2866V40.4611H19.3208V27.2866C19.3208 24.2916 20.5105 21.4194 22.6283 19.3016C24.746 17.1839 27.6183 15.9941 30.6133 15.9941Z" stroke="#925FF0" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.7925 17.8761H4.26416V40.461H11.7925V17.8761Z" stroke="#925FF0" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.02831 12.23C10.1072 12.23 11.7925 10.5447 11.7925 8.46581C11.7925 6.38693 10.1072 4.70166 8.02831 4.70166C5.94943 4.70166 4.26416 6.38693 4.26416 8.46581C4.26416 10.5447 5.94943 12.23 8.02831 12.23Z" stroke="#925FF0" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="https://github.com/devlucaspro"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
              <path d="M17.0185 36.7464C7.60808 39.5695 7.60808 32.0412 3.84393 31.1002M30.193 42.3926V35.109C30.2636 34.2115 30.1423 33.3094 29.8373 32.4624C29.5323 31.6154 29.0504 30.8431 28.4238 30.1968C34.3336 29.538 40.5444 27.2984 40.5444 17.0222C40.5439 14.3945 39.5332 11.8676 37.7213 9.96445C38.5792 7.66551 38.5186 5.12441 37.5519 2.86903C37.5519 2.86903 35.3311 2.2103 30.193 5.6545C25.8793 4.4854 21.3322 4.4854 17.0185 5.6545C11.8804 2.2103 9.65955 2.86903 9.65955 2.86903C8.69287 5.12441 8.6322 7.66551 9.49016 9.96445C7.66479 11.8817 6.65297 14.4315 6.66705 17.0787C6.66705 27.2795 12.8779 29.5192 18.7876 30.2532C18.1684 30.8931 17.6909 31.6561 17.386 32.4927C17.0812 33.3294 16.956 34.2208 17.0185 35.109V42.3926" stroke="#925FF0" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/ribeiroo.dev"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
              <path d="M32.8254 4.70166H14.0047C8.80747 4.70166 4.5943 8.91483 4.5943 14.112V32.9328C4.5943 38.13 8.80747 42.3432 14.0047 42.3432H32.8254C38.0226 42.3432 42.2358 38.13 42.2358 32.9328V14.112C42.2358 8.91483 38.0226 4.70166 32.8254 4.70166Z" stroke="#925FF0" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M30.9434 22.3369C31.1757 23.9032 30.9082 25.5029 30.1789 26.9085C29.4496 28.314 28.2956 29.4538 26.8812 30.1657C25.4668 30.8776 23.8639 31.1254 22.3006 30.8738C20.7372 30.6223 19.2929 29.8842 18.1733 28.7645C17.0536 27.6448 16.3154 26.2005 16.0639 24.6372C15.8123 23.0738 16.0601 21.4709 16.772 20.0565C17.4839 18.6421 18.6237 17.4882 20.0293 16.7589C21.4348 16.0296 23.0345 15.762 24.6008 15.9943C26.1986 16.2312 27.6778 16.9757 28.8199 18.1178C29.962 19.26 30.7065 20.7391 30.9434 22.3369Z" stroke="#925FF0" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M33.7665 13.1709H33.7867" stroke="#925FF0" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a> 
        </div>
      </div>
      <div className='card'>
        <div>
          <i className="fa-regular fa-circle-check"></i>
          <p>Frontend projects for every programming level</p>
        </div>
        <div>
          <i className="fa-regular fa-circle-check"></i>
          <p>The best design you can find and practice</p>
        </div>
        <div>
          <i className="fa-regular fa-circle-check"></i>
          <p>Our community on Discord for support</p>
        </div>
        <div>
          <i className="fa-regular fa-circle-check"></i>
          <p>Everything here is for free</p>
        </div>
        <hr />
        <Link to='/login'>Start coding today</Link>
      </div>
    </div>
  )
}

export default DivInline;