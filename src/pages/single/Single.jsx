import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/menu/Menu'

function Single() {
  return (
    <div className='flex flex-row mt-10'>
      <div className='basis-[70rem]'>
        <div className="flex flex-col">
          <img src="https://images.pexels.com/photos/265129/pexels-photo-265129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-96 w-full object-cover' alt="thumb" />
          <div className="flex flex-row mt-10 items-center">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-12 w-12 rounded-full mr-3' alt="user-thumb" />
            <div className="flex flex-col">
              <p className='font-bold'>John Doe</p>
              <div className="flex flex-row gap-3 items-center">
                <p>Posted 2 days ago</p>
                <div>
                  <Link to={`/write?edit=2`}>
                    <svg aria-hidden="true" className='h-6 w-6 text-green-500' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </Link>
                </div>
                <div>
                <svg aria-hidden="true" className='h-6 w-6 text-red-500' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" fillRule="evenodd" />
                </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className='font-bold text-xl mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quis illum optio non voluptatem molestias.</h1>
        <p className='mt-5 text-justify leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel maiores quis voluptates ab sapiente similique ipsum sequi ea quas labore, quos architecto pariatur velit vero! Porro vitae enim doloribus hic commodi officia fugiat voluptate repellendus? Veritatis neque deserunt, praesentium magni porro ducimus doloremque atque delectus quis pariatur iure facilis architecto repudiandae nesciunt eligendi, exercitationem error doloribus nisi vitae ullam recusandae adipisci. Sunt impedit deserunt omnis culpa repellat necessitatibus! Eum pariatur voluptas perspiciatis dolore commodi, ea accusamus totam blanditiis saepe nobis aliquam tempore perferendis, debitis esse maxime? Aspernatur itaque omnis earum! Quas, quos iure magni deserunt accusantium esse excepturi deleniti mollitia eveniet nostrum magnam nesciunt sed repellat incidunt velit amet nulla quam officiis et maiores praesentium doloremque molestiae similique. Quam eaque, sunt similique velit in dolor, voluptate illo atque laudantium quas quasi. Tempora alias libero voluptatibus impedit illo iste voluptas praesentium velit, quasi totam vitae minima dolore, id enim quas, pariatur ad sapiente ducimus officia odit. Ipsum iure architecto enim aut excepturi quod eaque magni, ullam sapiente dolor repudiandae, <br/> <br/> repellendus quam nihil blanditiis non vel veniam possimus praesentium porro quia mollitia fugit nemo pariatur magnam. Corporis eius exercitationem totam repudiandae quod doloribus in officiis, adipisci quas nulla cum praesentium impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel maiores quis voluptates ab sapiente similique ipsum sequi ea quas labore, quos architecto pariatur velit vero! Porro vitae enim doloribus hic commodi officia fugiat voluptate repellendus? Veritatis neque deserunt, praesentium magni porro ducimus doloremque atque delectus quis pariatur iure facilis architecto repudiandae nesciunt eligendi, exercitationem error doloribus nisi vitae ullam recusandae adipisci. Sunt impedit deserunt omnis culpa repellat necessitatibus! Eum pariatur voluptas perspiciatis dolore commodi, ea accusamus totam blanditiis saepe nobis aliquam tempore perferendis, debitis esse maxime? Aspernatur itaque omnis earum! Quas, quos iure magni deserunt accusantium esse excepturi deleniti mollitia eveniet nostrum magnam nesciunt sed repellat incidunt velit amet nulla quam officiis et maiores praesentium doloremque molestiae similique. Quam eaque, sunt similique velit in dolor, voluptate illo atque laudantium quas quasi. Tempora alias libero voluptatibus impedit illo iste voluptas praesentium velit, quasi totam vitae minima dolore, id enim quas, pariatur ad sapiente ducimus officia odit. Ipsum iure architecto enim aut excepturi quod eaque magni, ullam sapiente dolor repudiandae, repellendus quam nihil blanditiis non vel veniam possimus praesentium porro quia mollitia fugit nemo pariatur magnam. Corporis eius exercitationem totam repudiandae quod doloribus in officiis, adipisci quas nulla cum praesentium impedit. </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single