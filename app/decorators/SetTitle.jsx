import React from 'react'

export const setTitle = (getTitle) => (WrappedComponent) => {
    return class extends React.Component {
        getTitle(){
            const title = getTitle
            if(title) {
                document.title = title
            }
            var mobile = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(mobile)) {
                var iframe = document.createElement('iframe');
                iframe.style.display = 'none'
                var iframeCallback = function () {
                    setTimeout(function () {
                        iframe.removeEventListener('load', iframeCallback);
                        document.body.removeChild(iframe);
                    }, 0);
                }
                iframe.addEventListener('load', iframeCallback);
                document.body.appendChild(iframe);
            }
        }
        componentWillMount(){
            this.getTitle(this.props)
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}
