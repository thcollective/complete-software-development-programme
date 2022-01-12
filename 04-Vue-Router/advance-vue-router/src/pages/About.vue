<template>
	<Page>
		<template #page-content>
			<Button @click="$router.push('/')"> Go to Home </Button>
		</template>
	</Page>
</template>

<script>
import Page from '../components/Page.vue';
import Button from '../components/Button.vue';

export default {
	name: 'Home',
	components: { Page, Button },
};
</script>
