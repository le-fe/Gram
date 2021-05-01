<template>
	<div class="lg:p-12 max-w-md max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
		<h1 class="lg:text-3xl text-xl font-semibold mb-6">Sign up</h1>
		<p class="mb-2 text-black text-lg">Register to manage your account</p>
		<form action="">
			<div class="flex lg:flex-row flex-col lg:space-x-2">
				<input
					type="text"
					placeholder="First Name"
					class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
					style='border: 1px solid rgb(211, 213, 216) !important; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg=="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;'
				/>
				<input
					type="text"
					placeholder="Last Name"
					class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
					style="border: 1px solid #d3d5d8 !important;"
				/>
			</div>
			<input
				type="text"
				placeholder="Email"
				class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
				style="border: 1px solid #d3d5d8 !important;"
			/>
			<input
				type="text"
				placeholder="Password"
				class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
				style="border: 1px solid #d3d5d8 !important;"
			/>
			<input
				type="text"
				placeholder="Confirm Password"
				class="bg-gray-200 mb-2 shadow-none  dark:bg-gray-800"
				style="border: 1px solid #d3d5d8 !important;"
			/>
			<div class="flex justify-start my-4 space-x-1">
				<div class="checkbox">
					<input type="checkbox" id="chekcbox1" checked="" />
					<label for="chekcbox1"><span class="checkbox-icon"></span> I Agree</label>
				</div>
				<a href="#"> Terms and Conditions</a>
			</div>
			<button type="submit" class="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">
				Login
			</button>
			<div class="text-center mt-5 space-x-2">
				<p class="text-base">Do you have an account? <router-link :to="{ name: 'LoginView' }"> Login </router-link></p>
			</div>
		</form>
	</div>
</template>
