<template>
	<header>
		<h1>
			{{ $route.meta.pageName }}
		</h1>
	</header>

	<main>
		<slot name="page-content">Content</slot>
	</main>
</template>
