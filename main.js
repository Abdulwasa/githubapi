$(document).ready(()=>{
	 $('#inputText').on('keyup', (e)=>{
		var input = $('#inputText').val();
		$.ajax({url: `https://api.github.com/users/${input}`})
		.done((user)=>{
			if(e.which || e.keyCode == 13){
			$('#profil').html(
				`<div class="container">
							<div class='row'>
							  <div class="col-md-4 col-sm-4 text-left"
											<p><strong>Name: </strong>
											${user.login}
											${user.name}
												<p>E-Mail: <a href="${user.email}">${user.email}</a></p>
												</p>
												<p><strong>Profil:</strong>
												<img width="100px" src='${user.avatar_url}'>
												<p>
												<a class="btn ml-5 btn-primary" target="_blank" href="${user.html_url}"> <strong>view Profil</strong></a>
										</div>
										<div class="col-md-4 col-sm-4 text-left">
													<p><strong>Repos:</strong>
													${user.public_repos}
													</p>
													<p><strong>Public:</strong>
													${user.public_gists}
													</p>
													<p><strong>followers:</strong>
													${user.followers}
													</p>
													<p><strong>following:</strong>
													${user.following}
													</p>
													<p><strong>Location:</strong>
													${user.location}
													</p>
													<p><strong>Company:</strong>
													${user.company}
													</p>
											</div>
										<div class="col-md-4 col-sm-4 text-left">
												<p><strong>WebSite / Blog:</strong>
													<a target="_blank" href="${user.blog}">${user.blog}</a>
													</p>
													<p><strong>Date:</strong>
													${user.created_at}
													</p>
													<p><strong>Bio:</strong>
													${user.bio}
													</p>
										</div>
								</div>
				</div>`)
}	})

	})
})
