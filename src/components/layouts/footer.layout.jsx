import React from 'react'
import { FOOTER_SECTION } from '@/config/app.config'
import { SOCIAL_LINKS } from '@/config/app.config'
import Icon from '@/components/ui/icon'
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <footer className='bg-secondary pt-4 mt-8'>
      <div className='container flex flex-wrap justify-between'>
        {FOOTER_SECTION.map((section, index) => {
          return (
            <div key={ index } className='flex flex-col gap-1 mb-16'>
              <h1 className="text-sm font-bold mb-3">{ section.title }</h1>
              <ul>
                { section.links.map(
                    (link, index) => {
                      return (
                          <li key={index} className="text-sm hover:underline">
                            <a href={ link.href }>
                              { link.text }
                            </a>
                          </li>
                      )
                    }
                  )
                }
              </ul>
            </div>
          )
        })}
      </div>
      <div className='bg-brand'>
        <div className='flex flex-col flex-wrap items-center justify-center gap-4 p-4 mx-auto sm:flex-row sm:justify-between max-w-7xl'>
          <div className='flex items-center justify-center gap-4'>
            { SOCIAL_LINKS.map((socialLink, index) => {
              return (
                <a href={socialLink.href} key={index} className='text-slate-100 hover:text-slate-300 transition-colors'>
                  <Icon icon={socialLink.icon} size="18" />
                </a>
              )
            }) }
          </div>
          <div>
            <p className="text-sm text-center text-white">
                Copyright &copy;{' '}
                {`${dayjs().year()} Booking.com™. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
