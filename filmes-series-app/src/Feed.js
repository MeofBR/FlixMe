import React, { useEffect, useState  } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import Header from './Header';

import './assets/styles/Feed.css';

const storedUser = JSON.parse(localStorage.getItem('usuario'));

export function Post({ userImage, userName, postText, movieName, setIsFavorite, post }) {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isFavorite, SetIsFavorite] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);  
    
  function handleLike() {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else if (!disliked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
      setLiked(true);
      setDisliked(false);
    }
  }

  function handleDislike() {
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    } else if (!liked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
    } else {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setLiked(false);
      setDisliked(true);
    }
  }

  const handleClick = () => {
    SetIsFavorite(!isFavorite);
    setIsFavorite(post, !isFavorite)
  };

  
  return (
    <section className='post-container'>        
        <div className="post">
          <img src={userImage} alt={userName} />
          <div className="post-content">
            <div className="post-header">
              <h3>{userName}</h3>
              <p>{movieName}</p>              
            </div>
            <p>{postText}</p>
            <div className="post-footer">
              <div>
                <button className={`${liked ? 'button-like-active' : 'button-like'}`} onClick={handleLike}><ThumbUpIcon/>{likes}</button>
              </div>
              <div>
                <button className={`${disliked ? 'button-dislike-active' : 'button-dislike'}`} onClick={handleDislike}><ThumbDownAltIcon/> {dislikes}</button>
              </div>
              <div>
                <button
                  className={`${isFavorite ? "button-follow-active" : "button-follow"}`}
                  onClick={handleClick}
                >
                  {isFavorite ? <GradeIcon/> : <GradeOutlinedIcon/>}
                  {isFavorite ? "Seguindo" : "Seguir"}
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
    
  );
}

function Feed({ isFavorite }) {
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [posts, setPosts] = useState([
    {
      postId: 1,
      userImage: 'https://i.pravatar.cc/200?img=39',
      userName: 'Daniela Sanches',
      postText: 'Acabei de assistir um filme incrível! Recomendo demais. Os efeitos especiais são de arrasar! Quem  gosta de ação, tem que  dar uma olhada em Transformers 4!',
      movieName: 'Transformers 4',
      isFavorite: false,    
    },
    {
      postId: 2,
      userImage: 'https://i.pravatar.cc/200?img=52',
      userName: 'Maylon Zanardi',
      postText: 'Estou pensando em comprar um ingresso para assistir à John Wick 4 semana que vem... Alguém aí já assistiu? Sabe se a ação é tão boa quanto dizem?',
      movieName: 'John Wick 4',
      isFavorite: false,
    },
    {
      postId: 3,
      userImage: 'https://i.pravatar.cc/200?img=4',
      userName: 'Marlon Oliveira',
      postText: 'Pensa em um filme que me deixou completamente maluco! Sinceramente o enredo é insano, a fotografia é  de outro mundo, e o PlotTwist no final é de cair o queixo! Super Recomendo!',
      movieName: 'A Ilha',
      isFavorite: false,
    },
    {
      postId: 4,
      userImage: 'https://i.pravatar.cc/200?img=3',
      userName: 'João Henrique Gabardo Moreira',
      postText: 'Me indicaram para ver esse filme com a minha namorada, não sei se foi por brincadeira, ou se falaram sério rssr mas parece promissor!',
      movieName: '50 Tons de Cinza',
      isFavorite: false,
    },
  ]);

  useEffect(() => {
   if (isFavorite){    
    if(localStorage.getItem("postsData")){
      let localStoragePosts = JSON.parse(localStorage.getItem("postsData"));

      const filteredFavorites = localStoragePosts.filter(item => item.isFavorite === true);
      setPosts(filteredFavorites);
    }else {
      setPosts([]);
    }
   } else {
    localStorage.removeItem("postsData");
   }
   // eslint-disable-next-line
  }, []);
  

  const [newPost, setNewPost] = useState({
    postId: Math.max(...posts.map(post => post.postId)) + 1,
    userImage: './assets/images/Perfil_Foto.png',
    userName: storedUser.nome,
    postText: '',
    movieName: '',
    isFavorite: '',
  });

  function handlePost() {
    setPosts([newPost, ...posts]);
    localStorage.setItem("postsData", JSON.stringify([newPost, ...posts]));
    setNewPost({
      ...newPost,
      postId: newPost.postId + 1,
      postText: '',
      movieName: '',
      isFavorite: '',
    });
  
    if (newPost.isFavorite === true) {
      setFavoritePosts([newPost, ...favoritePosts]);
    }
  }

  function setIsFavorite( post, isFavorite){
    post.isFavorite = isFavorite;
    const index = posts.findIndex(item => item.id === post.id);
    const newItem = { ...posts[index], post };
    const newItems = [...posts];
    newItems[index] = newItem;
    setPosts(newItems);
    localStorage.setItem("postsData", JSON.stringify(newItems));
  }

  function handleDelete(postId) {
    const newPosts = posts.filter((post) => post.postId !== postId);
    setPosts(newPosts);
    localStorage.setItem("postsData", JSON.stringify(newPosts));
  }

  
   
  return (
    <div className="social-feed">
      {!isFavorite && (<><Header/>  <div className="new-post">
        <div className="user-info">
          <img src={newPost.userImage} alt="User avatar" />
          <div className='inputs-container'>
            <input className='input-movie-name' type="text" placeholder="Nome do filme/série"            
            value={newPost.movieName}
            onChange={(e) => setNewPost({ ...newPost, movieName: e.target.value })}
            />
            <input className='input-description' type="text" placeholder="Escreva..."              
              value={newPost.postText}
              onChange={(e) => setNewPost({ ...newPost, postText: e.target.value })}
            />
            <div className='button-container-end'>
              <button className='button-default' onClick={handlePost}>Postar</button>
            </div>            
          </div>                    
        </div>
      </div></>)}
      
     { posts.map((post, index) => (
          <div
            className='index-container'
           key={index}>
          <Post
            userImage={post.userImage}
            userName={post.userName}
            postText={post.postText}
            movieName={post.movieName}
            isFavorite={post.isFavorite}
            setIsFavorite={setIsFavorite}
            post={post}
          />
          {post.userName === storedUser.nome && (
            <div className='post-delete'>
              <button className='button-delete' onClick={() => handleDelete(post.postId)}>Excluir</button>
              <button className='button-delete' onClick={() => handleDelete(post.postId)}>Encerrar Post</button>
            </div>
          )}
        </div>
        ))}
        
      </div>
  );
}

export default Feed;

