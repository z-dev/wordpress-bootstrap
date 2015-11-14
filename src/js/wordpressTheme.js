/*eslint no-invalid-this: 0*/

const jQuery = require('jquery')

// add twitter bootstrap classes and color based on how many times tag is used
function addTwitterBSClass (thisObj) {
  const title = jQuery(thisObj).attr('title')
  if (title) {
    const titles = title.split(' ')
    if (titles[0]) {
      const num = parseInt(titles[0], 10)
      if (num > 0) {
        jQuery(thisObj).addClass('label label-default')
      }
      if (num === 2) {
        jQuery(thisObj).addClass('label label-info')
      }
      if (num > 2 && num < 4) {
        jQuery(thisObj).addClass('label label-success')
      }
      if (num >= 5 && num < 10) {
        jQuery(thisObj).addClass('label label-warning')
      }
      if (num >= 10) {
        jQuery(thisObj).addClass('label label-important')
      }
    }
  } else {
    jQuery(thisObj).addClass('label')
  }
  return true
}

// as the page loads, call these scripts
jQuery(document).ready(($) => {
	// modify tag cloud links to match up with twitter bootstrap
  $('#tag-cloud a').each(function () {
    addTwitterBSClass(this)
    return true
  })

  $('p.tags a').each(function () {
    addTwitterBSClass(this)
    return true
  })

  $('ol.commentlist a.comment-reply-link').each(function () {
    $(this).addClass('btn btn-success btn-mini')
    return true
  })

  $('#cancel-comment-reply-link').each(function () {
    $(this).addClass('btn btn-danger btn-mini')
    return true
  })

	// Prevent submission of empty form
  $('[placeholder]').parents('form').submit(function () {
    $(this).find('[placeholder]').each(function () {
      const input = $(this)
      if (input.val() === input.attr('placeholder')) {
        input.val('')
      }
    })
  })
  $('.alert-message').alert()
  $('.dropdown-toggle').dropdown()
})
